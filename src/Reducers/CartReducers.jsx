const initailState = {
  cartData: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        cartData: [...state.cartData, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {};
    default:
      return state;
  }
};

export { cartReducer, initailState };
