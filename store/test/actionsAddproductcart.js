// Trong file store/actions.js
export const addToCartAction = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product,
    };
};
export const removeFromCartAction = (productId) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: productId,
    };
};

export const addToCartWithQuantity = (product, quantity) => ({
    type: 'ADD_TO_CART_WITH_QUANTITY',
    payload: {
        product: product,
        quantity: quantity,
    },
});

export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const updateQuantity = (productId, newQuantity) => ({
    type: UPDATE_QUANTITY,
    payload: { productId, newQuantity },
});

export const setAddress = (addressData) => ({
    type: 'SET_ADDRESS',
    payload: addressData,
});

export const clearCartAndAddress = () => ({
    type: 'CLEAR_CART_AND_ADDRESS',
});

// Trong file store/reducers/cartReducer.js
const initialState = {
    cartItems: [], // Danh sách các sản phẩm trong giỏ hàng
    addressData: null, // Dữ liệu địa chỉ
};

// Trong file store/reducers/cartReducer.js
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const product = action.payload;
            const existingProductIndex = state.cartItems.findIndex(item => item.productId === product.productId);
            if (existingProductIndex !== -1) {
                const updatedCartItems = [...state.cartItems];
                updatedCartItems[existingProductIndex] = {
                    ...updatedCartItems[existingProductIndex],
                    quantity: updatedCartItems[existingProductIndex].quantity + 1
                };
                return {
                    ...state,
                    cartItems: updatedCartItems,
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, {
                        productId: product.productId,
                        quantity: 1,
                        name: product.product_name,
                        image: product.image_link,
                        price: product.product_price,
                    }],
                };
            }
        case 'REMOVE_FROM_CART':
            const productId = action.payload;
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.productId !== productId),
            };
        case UPDATE_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.productId === action.payload.productId ? { ...item, quantity: action.payload.newQuantity } : item
                ),
            };
        case 'SET_ADDRESS':
            return {
                ...state,
                addressData: action.payload,
            };
        case 'ADD_TO_CART_WITH_QUANTITY':
            const { product: addedProduct, quantity: addedQuantity } = action.payload;
            const existingProductIndex1 = state.cartItems.findIndex(item => item.productId === addedProduct.productId);
            if (existingProductIndex1 !== -1) {
                const updatedCartItems = [...state.cartItems];
                updatedCartItems[existingProductIndex1] = {
                    ...updatedCartItems[existingProductIndex1],
                    quantity: updatedCartItems[existingProductIndex1].quantity + addedQuantity
                };
                return {
                    ...state,
                    cartItems: updatedCartItems,
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, {
                        productId: addedProduct.productId,
                        quantity: addedQuantity,
                        name: addedProduct.product_name,
                        image: addedProduct.image_link,
                        price: addedProduct.product_price,
                    }],
                };
            }
        case 'CLEAR_CART_AND_ADDRESS':
            return {
                ...state,
                cartItems: [],
                addressData: null,
            };
        default:
            return state;
    }
};


export default cartReducer;
