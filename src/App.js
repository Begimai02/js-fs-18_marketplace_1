import { createContext } from "react";
import "./App.css";
import ProductContextProvider from "./Context/ProductContextProvider";
import MyRoutes from "./MyRoutes";
import Toastify from "./Components/Toastify/Toastify";


function App() {
  return (
    <ProductContextProvider>
      <Toastify />
      <MyRoutes />
    </ProductContextProvider>
  );
}

export default App;
