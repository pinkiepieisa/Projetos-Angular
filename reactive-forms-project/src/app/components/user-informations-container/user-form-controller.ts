import { inject } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IUser } from "../../interfaces/user/user.interface";
import { PhoneList } from "../../types/phone-list";
import { AddressList } from "../../types/address-list";
import { DependentList } from "../../types/dependents-list";
import { convertPtBrDateToDateObj } from "../../utils/convert-pt-br-date-to-date-obj";
import { preparePhoneList } from "../../utils/prepare-phone-list";
import { PhoneTypeEnum } from "../../enums/phone-type.enum";
import { prepareAddressList } from "../../utils/prepare-address-list";

export class UserFormController {
    //Lógica do formulário

    userForm!: FormGroup;
    //! Para quando há a certeza de que a propriedade vai ser valorizada

    private emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Parâmetros do email

    private _fb = inject(FormBuilder);
    //Injeção das funções do formBuilder diretamente no Controller

    constructor() {
        this.createUserForm();
    }

    get generalInformations(): FormGroup {
        return this.userForm.get('generalInformations') as FormGroup;
    }
    //Alias do método get do generalInformations

    get phoneList(): FormArray {
        return this.userForm.get('contactInformations.phoneList') as FormArray;
    }

    get addressList(): FormArray {
        return this.userForm.get('contactInformations.addressList') as FormArray;
    }

    get dependentsList(): FormArray {
        return this.userForm.get('dependentsList') as FormArray;
    }

    fulfillUserForm(user: IUser) {
        this.resetUserForm();

        this.fulfillGeneralInformations(user);

        this.fulfillPhoneList(user.phoneList);

        this.fulfillAddressList(user.addressList);

        this.fulfillDependentsList(user.dependentsList);
    }

    resetUserForm() {
        this.userForm.reset();

        this.generalInformations.reset();

        this.phoneList.reset();
        this.phoneList.clear();

        this.addressList.reset();
        this.addressList.clear();

        this.dependentsList.reset();
        this.dependentsList.clear();
    }

    private fulfillDependentsList(userDependentsList: DependentList) {
        userDependentsList.forEach((dependent) => {
            this.dependentsList.push(this._fb.group({
                name: [dependent.name, Validators.required],
                age: [dependent.age, Validators.required],
                document: [dependent.document, Validators.required], 
            }));
        });
    }

    private fulfillAddressList(userAddressList: AddressList) {
        prepareAddressList(userAddressList, false, (address) => {
            this.addressList.push(this._fb.group({
                type: [address.type],
                typeDescription: [{value: address.typeDescription, disabled: true}],
                street: [address.street],
                complement: [address.complement],
                country: [address.country],
                state: [address.state],
                city: [address.city],
            }));
        });

        console.log('addressList', this.addressList);
        console.log('addressList', this.addressList.value);
        console.log('addressList', this.addressList.getRawValue());
    }

    private fulfillPhoneList(userPhoneList: PhoneList) {
        preparePhoneList(userPhoneList, false, (phone) => {
            const phoneValidators = phone.type === PhoneTypeEnum.EMERGENCY ? [] : [Validators.required];
            
            this.phoneList.push(this._fb.group({
                type: [phone.type],
                typeDescription: [phone.typeDescription],
                number: [phone.phoneNumber, phoneValidators],
            }));
        });

        console.log('form phoneList', this.phoneList);
    }

    private fulfillGeneralInformations(user: IUser) {
        const newUser = {
            ...user,
            birthDate: convertPtBrDateToDateObj(user.birthDate),
        };

        // this.userForm.get('generalInformations')?.patchValue(user);
        this.generalInformations.patchValue(newUser);
    }

    private createUserForm() {
        this.userForm = this._fb.group({
            generalInformations: this._fb.group({
                name: ['', Validators.required],
                email: ['', Validators.required],
                country: ['', Validators.required],
                state: ['', Validators.required],
                maritalStatus: [null, [Validators.required, Validators.pattern(this.emailPattern)]],
                monthlyIncome: [null, Validators.required],
                birthDate: [null, Validators.required],
            }),
            contactInformations: this._fb.group({
                phoneList: this._fb.array([]),
                addressList: this._fb.array([]),
            }),
            dependentsList: this._fb.array([]),
        });
    }   
}