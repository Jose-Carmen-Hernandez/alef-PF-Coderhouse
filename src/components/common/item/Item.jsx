import { Button } from "@mui/material";
import "./item.css";
import { Link } from "react-router-dom";

const Item = ({ item, darkMode }) => {
  return (
    <div className={darkMode ? " card card-dark" : "card card-light"}>
      <h2 className="info title">{item.title}</h2>
      <img src={item.imageUrl} alt={item.title} className="card-image" />
      <h3 className="info">Precio: ${item.price.toFixed(2)}</h3>
      <h3 className="info">
        {/* <b>Disponibles: </b> */}
        {!item.stock && (
          <span className="agotado">&quot;Producto agotado&quot;</span>
        )}
      </h3>
      <Link to={`/itemDetail/${item.id}`}>
        <Button variant="outlined">Ver detalle</Button>
      </Link>
    </div>
  );
};

export default Item;
