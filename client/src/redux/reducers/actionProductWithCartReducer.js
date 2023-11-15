import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "../type";

const initialState = {
    cartData: [],
    quantity: [],
}

const actionProductWithCartReducer = (state = initialState, action) => {
    if (action.type === ADD_PRODUCT_TO_CART) {
        {
            const isEqual = (item1, item2) => {
                return(
                    item1.except.name[item1.numbExcept] === item2.except.name[action.payload.numbExcept]
                )
            }
            let Arr = [...state.cartData];
            let Qty = [...state.quantity];
            const index = Arr.findIndex(item => isEqual(item, action.payload));
            // let index = Arr.indexOf(action.payload)
            if (index !== -1) {
                Qty[index] = Qty[index] + 1;
            } else {
                Arr.push(action.payload)
                Qty.push(1);
            }
            return({
                ...state,
                cartData: Arr,
                quantity: Qty
            })
        }
    } else {
        if (action.type === REMOVE_PRODUCT_FROM_CART) {{
            let Arr = [...state.cartData];
            let Qty = [...state.quantity];
            let i = action.payload;
            Arr.splice(i,1);
            Qty.splice(i,1);
            return({
                ...state,
                cartData: Arr,
                quantity: Qty
            })
        }} else {
            return state;
        }
    }
}

export default actionProductWithCartReducer;