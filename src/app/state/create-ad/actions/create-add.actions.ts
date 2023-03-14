import { CreateAdActionTypes } from "./create-add.enum";

export class SetAdDetailsAction {
    readonly type = CreateAdActionTypes.SET_AD_DETAILS;
    constructor(readonly payload: any) {}
}

export class SetAddressDetailsAction {
    readonly type = CreateAdActionTypes.SET_ADDRESS_DETAILS;
    constructor(readonly payload: any) {}
}

export class SubmitAdAction {
    readonly type = CreateAdActionTypes.SUBMIT_AD;
    constructor() {}
}

export class SubmitAdSuccessAction {
    readonly type = CreateAdActionTypes.SUBMIT_AD_SUCCESS;
    constructor(readonly payload: any) {}
}

export class SubmitAdErrorAction {
    readonly type = CreateAdActionTypes.SUBMIT_AD_ERROR;
    constructor(readonly payload: any) {}
}

export type CreateAdActions =
    | SetAdDetailsAction
    | SetAddressDetailsAction
    | SubmitAdAction
    | SubmitAdSuccessAction
    | SubmitAdErrorAction


