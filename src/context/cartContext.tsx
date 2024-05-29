import React, { ReactNode, createContext, useContext, useState } from "react";

type CartContextType = {
  cartItems: any[];
  wishListItems: any[];
  addToCart: (itemToBeAdded: ItemAdded) => void;
  removeFromCart: (itemToRemoved: ItemToRemoved) => void;
  removeFromWishList: (itemToRemovedWish: ItemToRemovedWish) => void;
  addQuantity: (itemToUpdate: ItemToUpdate) => void;
  minusQuantity: (itemToUpdate: ItemToUpdate) => void;
  addToWishlist: (itemToBeWished: ItemWished) => void;
  totalPrice: number;
};

type ItemAdded = {
  id: number;
  name: string;
  price: number;
};
type ItemWished = {
  id: number;
  name: string;
  price: number;
};

type ItemToRemoved = {
  id: number;
};
type ItemToRemovedWish = {
  id: number;
};

type ItemToUpdate = {
  id: number;
  name: string;
  price: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItem] = useState<any[]>([]);
  const [wishListItems, setWishListItems] = useState<any[]>([]);

  const addToCart = (itemToBeAdded: ItemAdded) => {
    const exisitngItem = cartItems.find((item) => item.id === itemToBeAdded.id);
    if (exisitngItem) {
      const updateItems = cartItems.map((item) =>
        item.id === itemToBeAdded.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
      setCartItem(updateItems);
    } else {
      setCartItem([...cartItems, { ...itemToBeAdded, quantity: 1 }]);
    }
  };
  const removeFromCart = (itemToRemoved: ItemToRemoved) => {
    const updateItems = cartItems.filter(
      (item) => item.id !== itemToRemoved.id
    );
    setCartItem(updateItems);
  };
  const addQuantity = (itemToUpdate: ItemToUpdate) => {
    const updateItems = cartItems.map((item) =>
      item.id === itemToUpdate.id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );
    setCartItem(updateItems);
  };
  const minusQuantity = (itemToUpdate: ItemToUpdate) => {
    const updateItems = cartItems.map((item) =>
      item.id === itemToUpdate.id
        ? {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : 1,
          }
        : item
    );
    setCartItem(updateItems);
  };

  const addToWishlist = (itemToBeWished: ItemWished) => {
    const exisitngItem = wishListItems.find(
      (item) => item.id === itemToBeWished.id
    );
    if (exisitngItem) {
      const updateItems = cartItems.map((item) =>
        item.id === itemToBeWished.id
          ? {
              ...item,
            }
          : item
      );
      setCartItem(updateItems);
    } else {
      setWishListItems([...wishListItems, { ...itemToBeWished }]);
    }
  };

  const removeFromWishList = (itemToRemovedWish: ItemToRemovedWish) => {
    const updateItems = wishListItems.filter(
      (item) => item.id !== itemToRemovedWish.id
    );
    setWishListItems(updateItems);
  };

  const totalPrice = cartItems.reduce(
    (acc, curr) => curr.price * curr.quantity + acc,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishListItems,
        addToCart,
        addToWishlist,
        removeFromCart,
        removeFromWishList,
        addQuantity,
        minusQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("UseCart must use within Cartprovider");
  }
  return context;
};
