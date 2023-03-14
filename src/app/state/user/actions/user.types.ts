export enum CreateUserActionTypes {
    SAVE_CREATE_USER_REQUEST = '[createUser] save create user request',
    CREATE_USER = '[createUser] create user',
    CREATE_USER_SUCCESS = '[createUser] create user success',
    CREATE_USER_ERROR = '[createUser] create user error',
   
}


export enum LoginActionTypes {
    SAVE_LOGIN_REQUEST = '[login] save login request',
    USER_LOGIN = '[login] user login',
    USER_LOGIN_SUCCESS = '[login] user login success',
    USER_LOGIN_ERROR = '[login] user login error',
}

export enum SocialLoginActionTypes {
    SOCIAL_USER_LOGIN = '[socialLogin] social user login',
    SOCIAL_USER_LOGIN_SUCCESS = '[socialLogin] social user login success',
    SOCIAL_USER_LOGIN_ERROR = '[socialLogin] social user login error',
}