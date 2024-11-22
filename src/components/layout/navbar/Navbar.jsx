import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";
import CabinTwoToneIcon from "@mui/icons-material/CabinTwoTone";
import LaptopChromebookTwoToneIcon from "@mui/icons-material/LaptopChromebookTwoTone";
import HeadsetMicTwoToneIcon from "@mui/icons-material/HeadsetMicTwoTone";
import DesktopMacTwoToneIcon from "@mui/icons-material/DesktopMacTwoTone";
import PhoneIphoneTwoToneIcon from "@mui/icons-material/PhoneIphoneTwoTone";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode }) => {
  return (
    <div className={darkMode ? "navbar navbar-dark" : "navbar"}>
      <div className="logo-container">
        <Link to="/">
          <img
            className={darkMode ? "logo dark-logo" : "logo"}
            src="https://res.cloudinary.com/dkkwppueg/image/upload/v1728355319/alef-logo_cxrxbg.jpg"
            alt="alef electronics logotipo"
          />
        </Link>
        <h1 className={darkMode ? "dark-title" : "light-title"}>
          Alef-Computers
        </h1>
      </div>
      <ul className="categories">
        <Link to="/" className={darkMode ? "li li-dark" : "li"}>
          <CabinTwoToneIcon />
          Inicio
        </Link>

        <Link
          to="/category/computadoras"
          className={darkMode ? "li li-dark" : "li"}
        >
          <LaptopChromebookTwoToneIcon />
          Computadoras
        </Link>

        <Link
          to="/category/celulares"
          className={darkMode ? "li li-dark" : "li"}
        >
          <PhoneIphoneTwoToneIcon />
          Celulares
        </Link>

        <Link
          to="/category/accesorios"
          className={darkMode ? "li li-dark" : "li"}
          href=""
        >
          <HeadsetMicTwoToneIcon />
          Accesorios
        </Link>

        <Link
          to="/category/monitores"
          className={darkMode ? "li li-dark" : "li"}
        >
          <DesktopMacTwoToneIcon />
          Monitores
        </Link>

        <CartWidget darkMode={darkMode} />
      </ul>
    </div>
  );
};
export default Navbar;
