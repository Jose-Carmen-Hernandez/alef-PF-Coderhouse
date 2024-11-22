import { useState } from "react";
import Navbar from "./components/layout/navbar/Navbar";
import { FormControlLabel } from "@mui/material";
import { Switch } from "@mui/material";
import Footer from "./components/layout/footer/Footer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import Checkout from "./components/pages/checkout/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notfound from "./components/pages/notFound/NotFound";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import { CartContextProvider } from "./context/CartContext";
import CartContainer from "./components/pages/cartContainer/CartContainer";
import { Toaster } from "sonner";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const cambiarModo = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <BrowserRouter>
        <Toaster
          duration={1500}
          richColors
          position="top-center"
          expand={true}
        />
        <CartContextProvider>
          <Navbar darkMode={darkMode} />
          <div className={darkMode ? "dark-mode-button" : "mode-button"}>
            <FormControlLabel
              control={<Switch checked={darkMode} onChange={cambiarModo} />}
              label="Cambiar modo"
              className={darkMode ? "dark-style" : "light-style"}
            />
          </div>

          <Routes>
            <Route
              path="/"
              element={<ItemListContainer darkMode={darkMode} />}
            />
            <Route
              path="/category/:categoryName"
              element={<ItemListContainer darkMode={darkMode} />}
            />
            <Route
              path="/cart"
              element={<CartContainer darkMode={darkMode} />}
            />
            <Route
              path="/itemDetail/:id"
              element={<ItemDetailContainer darkMode={darkMode} />}
            />
            <Route
              path="/checkout"
              element={<Checkout darkMode={darkMode} />}
            />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
