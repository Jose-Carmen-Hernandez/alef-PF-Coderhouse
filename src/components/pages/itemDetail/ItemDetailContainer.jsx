import ItemDetail from "./ItemDetail.jsx";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { toast } from "sonner";
import { dataBase } from "../../../firebaseConfig.js"; //variable de conexion a firebase
import { collection, doc, getDoc } from "firebase/firestore";
import Loading from "../../common/loading/Loading.jsx";

const ItemDetailContainer = ({ darkMode }) => {
  const { id } = useParams();
  const { addToCart, getTotalQuantity } = useContext(CartContext);
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  let totalInCart = getTotalQuantity(id);
  //configuramos useEffect para obtener los productos desde Firebase:

  useEffect(() => {
    setIsLoading(true);
    const productsCollection = collection(dataBase, "products");
    const docRef = doc(productsCollection, id);
    getDoc(docRef).then((res) => {
      setItem({ ...res.data(), id: res.id });
      setIsLoading(false);
    });
  }, [id]);

  //Aqui en el componente padre se declara la funcion agregar al carrito, y se ejecuta dentro del componente Counter.jsx.
  const agregarAlCarrito = (cantidad) => {
    let objetoAgregado = { ...item, quantity: cantidad };
    addToCart(objetoAgregado); //viene de CartContext
    //console.log("Producto agregado al carrito: ", objetoAgregado);
    toast.success("Producto agregado");
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ItemDetail
          item={item}
          darkMode={darkMode}
          agregarAlCarrito={agregarAlCarrito}
          totalInCart={totalInCart}
        />
      )}
    </>
  );
};

export default ItemDetailContainer;
