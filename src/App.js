import "./App.css";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MyRoutes from "./MyRoutes";
import Toastify from "./components/Toastify/Toastify";
import CartContextProvider from "./contexts/CartContextProvider";

function App() {
  return (
    <CartContextProvider>
      <ProductContextProvider>
        <Toastify />
        <MyRoutes />
      </ProductContextProvider>
    </CartContextProvider>
  );
}

export default App;
