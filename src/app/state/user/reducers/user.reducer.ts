import { CreateUserActionTypes, LoginActionTypes, SocialLoginActionTypes, UserActions } from "../actions";


export const initialUseState = {
    creaateUserRequest: null,
    createUserResponse: null,

    userLoginRequest: null,
    userLoginResponse: null,

    socialUserLoginResponse: null
};

export function CreateUserReducer(state: any = initialUseState, action: UserActions): any {
    if (action.type === CreateUserActionTypes.SAVE_CREATE_USER_REQUEST) {
        return {
            ...state,
            creaateUserRequest: action.payload,
        };

    } else if (action.type === CreateUserActionTypes.CREATE_USER_SUCCESS) {
        return {
            ...state,
            createUserResponse: action.payload,
        };
        
    }

    else if (action.type === CreateUserActionTypes.CREATE_USER_ERROR) {
        return {
            ...state,
            createUserResponse: action.payload,
        };
        
    }

    else if (action.type === LoginActionTypes.SAVE_LOGIN_REQUEST) {
        return {
            ...state,
            userLoginRequest: action.payload,
        };
        
    }
    else if (action.type === LoginActionTypes.USER_LOGIN_ERROR) {
        return {
            ...state,
            userLoginResponse: action.payload,
        };
        
    }
    else if (action.type === LoginActionTypes.USER_LOGIN_SUCCESS) {
        return {
            ...state,
            userLoginResponse: action.payload,
        };
        
    }


    else if (action.type === SocialLoginActionTypes.SOCIAL_USER_LOGIN_SUCCESS) {
        return {
            ...state,
            socialUserLoginResponse: action.payload,
        };
        
    }
    else if (action.type === SocialLoginActionTypes.SOCIAL_USER_LOGIN_ERROR) {
        return {
            ...state,
            socialUserLoginResponse: action.payload,
        };
        
    }

    else {
        return state;
    }
}