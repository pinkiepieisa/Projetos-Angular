import { MaritalStatusEnum } from "../enums/marital-status.enum";

export const maritalStatusDescriptionMap: { [key in MaritalStatusEnum]: string } = {
    [MaritalStatusEnum.SINGLE]: 'Solteiro',
    [MaritalStatusEnum.MARRIED]: 'Casadado',
    [MaritalStatusEnum.DIVORCED]: 'Divorciado',
    // Tipagem restrita a apenas o Enum
};

export const maritalStatusArray = Object.keys(maritalStatusDescriptionMap).map(Number).map((key) => {
    return { code: key, description: maritalStatusDescriptionMap[key as MaritalStatusEnum],}
});
//Converte o objeto de keys (chaves) em números ao invés de strings 

// Deixa o array assim:
// [
//     { code: 1, description: 'alguma coisa'},
//     { code: 2, description: 'alguma coisa'},
//     { code: 3, description: 'alguma coisa'}
// ]