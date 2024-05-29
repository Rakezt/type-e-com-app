type AddToCart = {
  type: "ADD_TO_CART";
  payload: { id: number; name: string; price: number };
};
type RemoveFromCart = {
  type: "REMOVE_FROM_CART";
  payload: { id: number };
};
type UpdateQuantity = {
  type: "UPDATE_QUANTITY";
  payload: { id: number; quantity: number };
};
type Total = {
  type: "TOTAL";
};
type FetchProducts = {
  type: "FETCH_PRODUCTS";
  payload: Product[];
};
export type ClickOption =
  | AddToCart
  | RemoveFromCart
  | UpdateQuantity
  | Total
  | FetchProducts;

export type Product = {
  id: number;
  name: string;
  price: number;
};

export type AppState = {
  products: Product[];
};

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export type InitialState = { cartItems: CartItem[]; total: number };
export const initialState: InitialState = { cartItems: [], total: 0 };
