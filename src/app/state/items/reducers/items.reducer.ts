import { ItemsActions, ItemsActionTypes } from "../actions";



export const initialItemState = {
    loadItems: null,
    loadSinleItem: null,
    loadItemOwnerDetails: null,
    filterProps: null,

};

export function ItemsReducer(state: any = initialItemState, action: ItemsActions): any {
    if (action.type === ItemsActionTypes.LOAD_ITEMS_SUCCESS) {
        return {
            ...state,
            loadItems: action.payload,
        };

    } else if (action.type === ItemsActionTypes.LOAD_ITEMS_ERROR) {
        return {
            ...state,
            loadItems: action.payload,
        };

    }

    else if (action.type === ItemsActionTypes.LOAD_SINGLE_ITEM_SUCCESS) {
        return {
            ...state,
            loadSinleItem: action.payload,
        };

    }

    else if (action.type === ItemsActionTypes.LOAD_SINGLE_ITEM_ERROR) {
        return {
            ...state,
            loadSinleItem: action.payload,
        };

    }
    else if (action.type === ItemsActionTypes.LOAD_ITEM_OWNER_DETAILS_SUCCESS) {
        return {
            ...state,
            loadItemOwnerDetails: action.payload,
        };

    }
    else if (action.type === ItemsActionTypes.LOAD_ITEM_OWNER_DETAILS_ERROR) {
        return {
            ...state,
            loadItemOwnerDetails: action.payload,
        };

    }

    else if (action.type === ItemsActionTypes.ITEM_FILTER_PROPS) {
        return {
            ...state,
            filterProps: action.payload,
        };

    }
    else {
        return state;
    }


}