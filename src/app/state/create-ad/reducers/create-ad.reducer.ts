import { CreateAdActionTypes } from "../actions";
import { CreateAdActions } from "../actions/create-add.actions";

export const initialAdState = {
    adDetails: null,
    adAddress: null,
    adResponse: null
};

export function CreateAdReducer(state: any = initialAdState, action: CreateAdActions): any {
    if (action.type === CreateAdActionTypes.SET_AD_DETAILS) {
        return {
            ...state,
            adDetails: action.payload,
        };

    } else if (action.type === CreateAdActionTypes.SET_ADDRESS_DETAILS) {
        return {
            ...state,
            adAddress: action.payload,
        };
        
    }

    else if (action.type === CreateAdActionTypes.SUBMIT_AD_SUCCESS) {
        return {
            ...state,
            adResponse: action.payload,
        };
        
    }
    else if (action.type === CreateAdActionTypes.SUBMIT_AD_ERROR) {
        return {
            ...state,
            adResponse: action.payload,
        };
        
    }
    else {
        return state;
    }
}