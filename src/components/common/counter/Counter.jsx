import { useState } from "react";
import "./counter.css";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";

//En este componente se ejecuta la funcion agregarAlCarrito (que viene del componente padre ItemDetailContainer.jsx) en el boton "agregar al carrito" y se le pasa como parametro el valor del contador:

const Counter = ({ stock, agregarAlCarrito, totalInCart }) => {
  const [contador, setContador] = useState(1);

  //no sumar mas del stock:
  const sumar = () => {
    stock - totalInCart > contador && setContador(contador + 1);
  };

  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

  return (
    <div className="controlls">
      <div className="counter">
        <button
          className={contador === 1 ? "disable" : "restar"}
          onClick={restar}
        >
          <Icon color="primary">-</Icon>
        </button>
        <h2> {contador}</h2>
        <button
          className={contador === stock ? "disable" : "sumar"}
          onClick={sumar}
        >
          <Icon color="primary">+</Icon>
        </button>
      </div>
      <Button
        variant="contained"
        onClick={() => agregarAlCarrito(contador)}
        disabled={!stock}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};
export default Counter;
