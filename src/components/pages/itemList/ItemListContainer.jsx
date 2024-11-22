import "./itemListContainer.css";
import { useEffect, useState } from "react";
import ItemList from "./ItemList.jsx";
import Loading from "../../common/loading/Loading.jsx";
import { useParams } from "react-router-dom";
import { dataBase } from "../../../firebaseConfig.js"; //variable de conexion a firebase
import { collection, getDocs, query, where, addDoc } from "firebase/firestore"; //addDoc se utilizo para agregar el array de productos a la BBDD

//cuando estamos en el home, categoryName es "undefined"
//cuando estamos en una categoria, categoryaname toma el nombre de la categoria

const ItemListContainer = ({ darkMode }) => {
  const { categoryName } = useParams();
  console.log("categoria: ", categoryName);

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  //la respuesta de Firebase viene codificada y con el id por separado. Es necesario decodificar la respuesta con el metodo .data()
  useEffect(() => {
    const productsCollection = collection(dataBase, "products"); //collection necesita 2 parametros(la BD y la coleccion)

    let docsRef = productsCollection;
    if (categoryName) {
      docsRef = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }
    getDocs(docsRef).then((res) => {
      let decodedResponse = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }; //aqui se decodifica la respuesta
      });
      setItems(decodedResponse);
      setLoading(false);
    });
  }, [categoryName]);

  //Funcion que agrega productos de forma masiva: Se utiliza una vez y se deshabilita:
  /*  const agregarArray = () => {
    const productsCollection = collection(dataBase, "products");
    products.forEach((product) => {
      addDoc(productsCollection, product);
    });
    console.log("Se agrega el array a la BD");
  }; */

  return loading && items.length === 0 ? (
    <Loading />
  ) : (
    <>
      <div>
        <h2 className={darkMode ? "offer offer-dark" : "offer offer-light"}>
          ¡Toda la tienda con 20% de descuento + 18 msi con Master Card!
        </h2>
      </div>
      <div
        className={
          darkMode ? "list-container list-container-dark" : "list-container"
        }
      >
        <ItemList items={items} darkMode={darkMode} />
      </div>
      {/* Boton para agregar todo el array de productos a firebase. Se pulsa una vez y se deshabilita */}
      {/* <button onClick={agregarArray}>Cargar muchos productos a la BD</button> */}
    </>
  );
};

export default ItemListContainer;
