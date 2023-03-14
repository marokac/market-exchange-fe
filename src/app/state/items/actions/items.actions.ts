import { ItemFiltere } from "src/app/shared/models/items-filter.model";
import { ItemsActionTypes } from "./items.types";

export class LoadItemsAction {
    readonly type = ItemsActionTypes.LOAD_ITEMS;
    constructor(readonly payload: any) { }
}


export class LoadItemsSuccessAction {
    readonly type = ItemsActionTypes.LOAD_ITEMS_SUCCESS;
    constructor(readonly payload: any) { }
}

export class LoadItemsErrorAction {
    readonly type = ItemsActionTypes.LOAD_ITEMS_ERROR;
    constructor(readonly payload: any) { }
}


export class ItemFilterPropsAction {
    readonly type = ItemsActionTypes.ITEM_FILTER_PROPS;
    constructor(readonly payload: ItemFiltere) { }
}

export class LoadSingleItemAction {
    readonly type = ItemsActionTypes.LOAD_SINGLE_ITEM;
    constructor(readonly payload: any) { }
}

export class LoadSingleItemSuccessAction {
    readonly type = ItemsActionTypes.LOAD_SINGLE_ITEM_SUCCESS;
    constructor(readonly payload: any) { }
}

export class LoadSingleItemErrorAction {
    readonly type = ItemsActionTypes.LOAD_SINGLE_ITEM_ERROR;
    constructor(readonly payload: any) { }
}


export class LoadItemOwnerAction {
    readonly type = ItemsActionTypes.LOAD_ITEM_OWNER_DETAILS;
    constructor(readonly payload: any) { }
}

export class LoadItemOwnerSuccessAction {
    readonly type = ItemsActionTypes.LOAD_ITEM_OWNER_DETAILS_SUCCESS
    constructor(readonly payload: any) { }
}

export class LoadItemOwnerErrorAction {
    readonly type = ItemsActionTypes.LOAD_ITEM_OWNER_DETAILS_ERROR;
    constructor(readonly payload: any) { }
}

export type ItemsActions =
    LoadItemsAction
    | LoadItemsSuccessAction
    | LoadItemsErrorAction
    | ItemFilterPropsAction
    | LoadSingleItemAction
    | LoadSingleItemSuccessAction
    | LoadSingleItemErrorAction
    | LoadItemOwnerAction
    | LoadItemOwnerSuccessAction
    | LoadItemOwnerErrorAction;