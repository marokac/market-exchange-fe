import { createSelector } from "@ngrx/store";
import { getUserLoginResponseSelector } from "../../user/selectors/user.selector";

export const getAdDetailsSelector = (state: any) => state?.createAd?.adDetails;
export const getAddressDetailsSelector = (state: any) => state?.createAd?.adAddress;
export const getSaveAdResponseSelector = (state: any) => state?.createAd?.adResponse;

export const getAdRequestDetails = createSelector(
    getAdDetailsSelector,
    getAddressDetailsSelector,
    getUserLoginResponseSelector,
    (adDetails, adAddress , user) => {
        return {
            adDetails,
            adAddress,
            user
        };
    }
);



