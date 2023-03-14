import { createSelector } from "@ngrx/store";
import { ItemFiltere } from "src/app/shared/models/items-filter.model";

export const loadItemsResponseSelector = (state: any) => state?.items?.loadItems;
export const loadSingleItemResponseSelector = (state: any) => state?.items?.loadSinleItem;
export const loadItemOwnerDetailsResponseSelector = (state: any) => state?.items?.loadItemOwnerDetails;
export const LoadFilterProps = (state: any)=>state?.items?.filterProps;


export const getFilterProps = createSelector(
    LoadFilterProps,
    (filterProps : ItemFiltere) => {
        return filterProps
    }
);
