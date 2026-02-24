import { isWithinInterval } from "date-fns";
import { IUser } from "../interfaces/user/user.interface";
import { IFilterOptions } from "../interfaces/filter-options.Interface";

const filterUsersListByName = (name: string | undefined, usersList: IUser[]): IUser[] => {
    const NAME_NOT_TYPPED = name === undefined;
    //Caso não tenha nada no campo name

    if (NAME_NOT_TYPPED) {
        return usersList;
        //Retorna a lista original
    }

    const filteredList = usersList.filter((user) => user.nome.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
    //Se o nome (presente na lista) inclui o nome digitado no filtro name (tudo é coparado em letra minúscula)

    return filteredList;
    //Retorna a lista filtrada
}

const filterUsersListByStatus = (status: boolean | undefined, usersList: IUser[]): IUser[] => {
    const STATUS_NOT_SELECTED = status === undefined;

    if (STATUS_NOT_SELECTED) {
        return usersList;
        //Retorna a lista original
    }

    const filteredList = usersList.filter((user) => user.ativo === status);
    //Se o status de alguém da lista é igual ao selecionado no filtro

    return filteredList;

}

const filterUsersListByDate = (startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] => {
    const DATE_NOT_SELECTED = startDate === undefined || endDate === undefined;

    if (DATE_NOT_SELECTED) {
        return usersList;
    }

    const listFiltered = usersList.filter((user) => isWithinInterval(new Date(user.dataCadastro), {
        start: startDate,
        end: endDate,
    }));

    //Uma constante ue recebe a lista filtrada que usa como parametro o usuário
    //usa a função da biblioteca importada que usa como parametro a data de usuário, porém como ela é uma string, está sendo convertida no formato Date
    //Usa como parametros uma data de início e uma de final, que já estão no formato data e são recolhidas no javascript

    return listFiltered;
}

const filterUsersList = (filterOptions: IFilterOptions, usersList: IUser[]): IUser[] => {

    let filteredList: IUser[] = [];

    filteredList = filterUsersListByName(filterOptions.name, usersList);

    filteredList = filterUsersListByStatus(filterOptions.status, filteredList);

    filteredList = filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList)

    return filteredList;

}

export {
    filterUsersList
};