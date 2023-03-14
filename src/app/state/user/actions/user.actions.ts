import { User } from "src/app/shared/models/user.model";
import { CreateUserActionTypes, LoginActionTypes, SocialLoginActionTypes } from "./user.types";


export class SaveCreateUserrequestAction {
    readonly type = CreateUserActionTypes.SAVE_CREATE_USER_REQUEST;
    constructor(readonly payload: any) {}
}

export class CreateUserAction {
    readonly type = CreateUserActionTypes.CREATE_USER;
    constructor() {}
}

export class CreateUserSuccessAction {
    readonly type = CreateUserActionTypes.CREATE_USER_SUCCESS;
    constructor(readonly payload: any) {}
}

export class CreateUserErrorAction {
    readonly type = CreateUserActionTypes.CREATE_USER_ERROR;
    constructor(readonly payload: any) {}
}


export class SaveLoginRequestAction {
    readonly type = LoginActionTypes.SAVE_LOGIN_REQUEST;
    constructor(readonly payload: any) {}
}

export class UserLoginAction {
    readonly type = LoginActionTypes.USER_LOGIN;
    constructor() {}
}

export class UserLoginuccessAction {
    readonly type = LoginActionTypes.USER_LOGIN_SUCCESS;
    constructor(readonly payload: any) {}
}

export class UserLoginErrorAction {
    readonly type = LoginActionTypes.USER_LOGIN_ERROR;
    constructor(readonly payload: any) {}
}


export class SocialUserLoginAction {
    readonly type = SocialLoginActionTypes.SOCIAL_USER_LOGIN;
    constructor(readonly payload: User) {}
}

export class SocialUserLoginuccessAction {
    readonly type = SocialLoginActionTypes.SOCIAL_USER_LOGIN_SUCCESS;
    constructor(readonly payload: any) {}
}

export class SocialUserLoginErrorAction {
    readonly type = SocialLoginActionTypes.SOCIAL_USER_LOGIN_ERROR;
    constructor(readonly payload: any) {}
}


export type UserActions =
    | SaveCreateUserrequestAction
    | CreateUserAction
    | CreateUserSuccessAction
    | CreateUserErrorAction
    | SaveLoginRequestAction
    | UserLoginAction
    | UserLoginuccessAction
    | UserLoginErrorAction
    | SocialUserLoginAction
    | SocialUserLoginuccessAction
    | SocialUserLoginErrorAction;



