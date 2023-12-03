import { createContext, useEffect, useState } from "react";
import convertNumberToPersian from "./convertNumberToPersian";
import axios from "axios";
import {ToastContainer, toast} from "react-toastify"

export const GlobalContext = createContext();

export default function GlobalContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [sortType, setSortType] = useState("mostPopular");

  const [users, setUsers] = useState([]);
  const [onlineUser, setOnlineUser] = useState({});
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  convertNumberToPersian();

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
      toast("محصول به سبد خرید اضافه شد.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        rtl: true,
        theme: "light",
        type: "success"
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

  return (
    <GlobalContext.Provider value={{ loading, cartItems, sortType, products, users, onlineUser, setLoading, setCartItems, setSortType, setProducts, increaseQuantityHandler, decreaseQuantityHandler, removeFromCartHandler,}}>
      {children}
      <ToastContainer rtl={true}/>
    </GlobalContext.Provider>
  );
}
