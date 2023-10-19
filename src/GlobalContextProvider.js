import { createContext, useEffect, useState } from "react";
import convertNumberToPersian from "./convertNumberToPersian";
import { numberWithCommas } from "./numberWithCommas";
import Swal from "sweetalert2";

export const GlobalContext = createContext();

export default function GlobalContextProvider({ children }) {
  const [sortType, setSortType] = useState("mostPopular");
  const [info, setInfo] = useState({});
  const [comments, setComments] = useState([]);
  const [products, setProducts] = useState([]);
  const [persianFoods, setPersianFoods] = useState([]);
  const [foreignFoods, setForeignFoods] = useState([]);
  const [pizzas, setPizzas] = useState([]);
  const [appetizers, setAppetizers] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const [cartItems, setCartItems] = useState([]);

  const increaseQuantityHandler = (product) => {
    const existingProduct = cartItems.find(
      (item) => item.id === product.id && item.category === product.category
    );
    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id && item.category === product.category
            ? { ...existingProduct, quantity: existingProduct.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      Swal.fire({
        icon: "success",
        title: "محصول به سبد خرید اضافه شد!",
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
      });
    }
  };

  const decreaseQuantityHandler = (product) => {
    const existingProduct = cartItems.find(
      (item) => item.id === product.id && item.category === product.category
    );
    if (existingProduct.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id && item.category === product.category
            ? { ...existingProduct, quantity: existingProduct.quantity - 1 }
            : item
        )
      );
    }
  };

  const removeFromCartHandler = (product) => {
    const existingProduct = cartItems.find(
      (item) => item.id === product.id && item.category === product.category
    );
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  useEffect(() => {
    convertNumberToPersian();
  });

  return (
    <GlobalContext.Provider
      value={{
        cartItems,
        sortType,
        info,
        comments,
        products,
        persianFoods,
        foreignFoods,
        pizzas,
        appetizers,
        desserts,
        drinks,
        setCartItems,
        increaseQuantityHandler,
        decreaseQuantityHandler,
        removeFromCartHandler,
        setSortType,
        setInfo,
        setComments,
        setProducts,
        setPersianFoods,
        setForeignFoods,
        setPizzas,
        setAppetizers,
        setDesserts,
        setDrinks,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
