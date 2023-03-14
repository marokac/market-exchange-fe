import { createSelector } from "@ngrx/store";

export const getCreateUserRequestSelector = (state: any) => state?.createUser?.creaateUserRequest;
export const getCreateUserResponseSelector = (state: any) => state?.createUser?.createUserResponse;

export const getSserLoginRequestSelector = (state: any) => state?.createUser?.userLoginRequest;
export const getUserLoginResponseSelector = (state: any) => state?.createUser?.userLoginResponse;

export const getSocialUserLoginResponseSelector = (state: any) => state?.createUser?.socialUserLoginResponse;


export const getCreateRequestSelector = createSelector(
    getCreateUserRequestSelector,
    (user: any) => {
        return {
            user
        };
    }
);

export const getLoginRequestSelector = createSelector(
    getSserLoginRequestSelector,
    (user: any) => {
        return {
            user
        };
    }
);