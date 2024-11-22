import { useContext, useState } from "react";
import "./checkout.css";
import { Button } from "@mui/material";
import { CartContext } from "../../../context/CartContext";
import { dataBase } from "../../../firebaseConfig";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const Checkout = ({ darkMode }) => {
  const { cart, getTotalPay, resetCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  //Estado para validacion de errores del formulario:
  const [errors, setErrors] = useState({});

  //Validar los campos del formulario:
  const validateForm = () => {
    let newErrors = {};
    if (!userInfo.name.trim()) {
      newErrors.name = "El campo nombre es requerido";
    }
    if (!userInfo.email.trim()) {
      newErrors.email = "El campo correo electrónico es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInfo.email)) {
      newErrors.email = "El correo electrónico no es válido";
    }
    if (!userInfo.phoneNumber.trim()) {
      newErrors.phoneNumber = "Numero de telefono es obligatorio";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  //creamos un solo estado para capturar los datos ingresados al formulario:
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const funcionFormulario = (evento) => {
    evento.preventDefault(); //previene que se recargue la pagina al enviar el formulario.

    if (!validateForm()) {
      toast.error("Completa todos los campos del formulario", errors);
      return; //El formulario no se envia si existen errores
    }

    const totalPay = getTotalPay();

    //Aqui se genera la orden de compra (order):
    const order = {
      buyer: userInfo,
      items: cart,
      total: totalPay,
    };

    let refCollection = collection(dataBase, "orders");
    addDoc(refCollection, order).then((res) => {
      setOrderId(res.id);
      //limpiar el carrito despues de generar la orden de compra:
      resetCart();
    });

    //updateDoc utiliza el metodo PATCH (y no el PUT) para modificar solo el stock.
    let refCol = collection(dataBase, "products");
    order.items.forEach((item) => {
      let refDoc = doc(refCol, item.id);
      updateDoc(refDoc, { stock: item.stock - item.quantity });
    });
  };

  const capturarInfo = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  if (orderId) {
    toast.success("Gracias por su compra!");

    return (
      <div className={darkMode ? "order dark-order" : "order"}>
        <h2 className={darkMode ? "dark-exito" : "exito"}>
          Compra exitosa. Numero de referencia: {orderId}
        </h2>
        <h3>Utiliza este numero de referencia para futuras aclaraciones.</h3>
        <Link to={"/"}>
          <Button variant="contained">Salir</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className={darkMode ? "dark-checkout checkout " : "checkout"}>
      <h1 className={darkMode ? "h1-title dark-h1title" : "h1-title"}>
        Finaliza tu compra
      </h1>
      <form onSubmit={funcionFormulario} className="checkout-form">
        <input
          className="input"
          type="text"
          placeholder="Nombre de usuario"
          name="name"
          onChange={capturarInfo}
        />
        <input
          className="input"
          type="email"
          placeholder="usuario@gmail.com"
          name="email"
          onChange={capturarInfo}
        />
        <input
          className="input"
          type="text"
          placeholder="+(52)5511223344"
          name="phoneNumber"
          onChange={capturarInfo}
        />
        <Button variant="outlined" type="submit">
          comprar
        </Button>
        <Link to={"/cart"}>
          <Button variant="outlined" color="error">
            cancelar
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default Checkout;
