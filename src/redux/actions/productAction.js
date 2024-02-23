import { ActionType } from "../contants/action-type";

export const setProducts = (products) => {
    return {
            type: ActionType.SET_PRODUCTS,
            payload: products,
    }

}
export const selectProducts = (products) => {
    return {
            type: ActionType.SELECT_PRODUCT,
            payload: products,
    }

}