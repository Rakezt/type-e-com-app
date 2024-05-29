import { ClickOption, InitialState, initialState } from "./reducer.type";

export const cartReducer = (
  state = initialState,
  action: ClickOption
): InitialState => {
  switch (action.type) {
    case "ADD_TO_CART":
      const exisitngItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (exisitngItem) {
        const updateItems = state.cartItems.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
        return { ...state, cartItems: updateItems };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    case "REMOVE_FROM_CART": {
      const updatedItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, cartItems: updatedItems };
    }
    case "UPDATE_QUANTITY": {
      const updateItems = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
      return { ...state, cartItems: updateItems };
    }
    case "TOTAL": {
      const totalPrice = state.cartItems.reduce(
        (acc, curr) => curr.price + acc,
        0
      );
      return { ...state, total: totalPrice };
    }

    default:
      return state;
  }
};
