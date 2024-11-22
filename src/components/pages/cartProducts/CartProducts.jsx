import { useContext } from "react";
import { Button } from "@mui/material";
import "./cartProducts.css";
import { CartContext } from "../../../context/CartContext";

//La funcion removeById en el boton eliminar, se ejecuta usando previamente un callback para evitar la autoejecucion en el montaje del componente (linea 25)
const CartProducts = () => {
  const { cart, removeById } = useContext(CartContext);

  return cart.map((product) => {
    return (
      <div key={product.id} className="cart-product">
        <div className="cart-product-1">
          <h4>{product.title}</h4>
          <img src={product.imageUrl} alt="product.title" />
        </div>
        <div className="cart-product-2">
          <h3>precio: ${product.price.toFixed(2)}</h3>
          <h4>cantidad: {product.quantity}</h4>
          <h4>subtotal: {(product.price * product.quantity).toFixed(2)}</h4>
          {/* cuando una funcion espera argumentos, se debe ejecutar con un callback al principio*/}
          <Button
            variant="outlined"
            color="error"
            onClick={() => removeById(product.id)}
          >
            Eliminar
          </Button>
        </div>
      </div>
    );
  });
};

export default CartProducts;
