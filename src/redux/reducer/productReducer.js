import { ActionType } from "../contants/action-type";

const initialState = {
    products: [{
        id: 1,
        title: "kavin",
        category: "developer"
    }]
}

const productReducer = (state, {type, payload}) => {
        switch (type) {
            case ActionType.SET_PRODUCTS:
                return state
                break;
            default:
                return state
                break;
        }
}

export default productReducer