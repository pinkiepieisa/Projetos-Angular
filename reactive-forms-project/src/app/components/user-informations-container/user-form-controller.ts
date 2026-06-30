import { inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IUser } from "../../interfaces/user/user.interface";

export class UserFormController {
    //Lógica do formulário

    userForm!: FormGroup;
    //! Para quando há a certeza de que a propriedade vai ser valorizada

    private _fb = inject(FormBuilder);
    //Injeção das funções do formBuilder diretamente no Controller

    constructor() {
        this.createUserForm();
    }

    get generalInformations(): FormGroup {
        return this.userForm.get('generalInformations') as FormGroup;
    }
    //Alias do método get do generalInformations

    fulfillUserForm(user: IUser) {
        this.fulfillGeneralInformations(user);
    }

    private fulfillGeneralInformations(user: IUser) {
        // this.userForm.get('generalInformations')?.patchValue(user);
        this.generalInformations.patchValue(user);
    }

    private createUserForm() {
        this.userForm = this._fb.group({
            generalInformation: this._fb.group({
                name: ['', Validators.required],
                email: ['', Validators.required],
                country: ['', Validators.required],
                state: ['', Validators.required],
                maritalStatus: [null, Validators.required],
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