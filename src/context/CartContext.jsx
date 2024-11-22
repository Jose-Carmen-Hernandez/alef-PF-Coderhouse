import { createContext, useState } from "react";
import { toast } from "sonner";

export const CartContext = createContext(); //esta variable se utiliza dentro del Provider

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // addToCart se ejecuta dentro de ItemDetailContainer
  const addToCart = (product) => {
    let existInCart = cart.some((el) => el.id === product.id); //true/false

    if (existInCart) {
      let nuevoArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: elemento.quantity + product.quantity,
          };
        } else {
          return elemento;
        }
      });
      setCart(nuevoArray);
      console.log("El producto ya existe");
    } else {
      setCart([...cart, product]);
    }
  };

  //genera un nuevo array excluyendo el id del elemento a eliminar:
  const removeById = (id) => {
    let cartFiltrado = cart.filter((item) => item.id !== id);
    setCart(cartFiltrado);
    toast.error("Producto eliminado");
    //console.log("Se elimino del carrito, id: ", id);
  };

  const resetCart = () => {
    setCart([]);
    console.log("Se limpio el carrito");
  };

  //obtener la cantidad de productos con diferente id en el carrito:***
  const getTotalQuantity = (id) => {
    const product = cart.find((element) => element.id === id); //{} || undefined
    return product ? product.quantity : 0;
  };

  //calcular el total a pagar:
  const getTotalPay = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);
    return total.toFixed(2);
  };

  //cantidad total de productos en el carrito sin importar si su id es igual o diferente:
  const getCartQuantity = () => {
    let totalItems = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);
    return totalItems;
  };

  //objeto de configuracion que pone a disposicion los elementos en su interior:
  let dataValue = {
    cart,
    addToCart,
    removeById,
    resetCart,
    getTotalQuantity,
    getTotalPay,
    getCartQuantity,
  };
  return (
    <CartContext.Provider value={dataValue}>{children}</CartContext.Provider>
  );
};
