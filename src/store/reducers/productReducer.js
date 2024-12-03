const initialValue = {
  products: [],
  cart:[],
};

export const productReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case "All_Products":
      return {...state, products:[ ...state.products, ...payload ]};
      // return { ...state, products: payload };

    case "Cart_Product":
      return {...state, cart:[...state.cart,payload]}

    case "Remove_Cart_Product":
      return {...state, cart:[...state.cart.filter((item)=> item.id !== payload.id )]}

    default:
      return state;
  }
};
