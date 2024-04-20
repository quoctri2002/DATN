// actions.js

export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';

export const removeItemFromCart = (productId) => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: productId,
});
// reducer.js


const initialState = {
  cartItems: [],
  // Các trạng thái khác của store
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.productId !== action.payload),
      };
    // Các case khác của reducer
    default:
      return state;
  }
};

export default reducer;
