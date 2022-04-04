import { createContext } from "react";
import "./App.css";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MyRoutes from "./MyRoutes";
import { ToastContainer } from "react-toastify";
import Toastify from "./components/Toastify/Toastify";

function App() {
  return (
    <ProductContextProvider>
      <Toastify />
      <MyRoutes />
    </ProductContextProvider>
  );
}

export default App;
