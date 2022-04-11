import "./App.css";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MyRoutes from "./MyRoutes";
import Toastify from "./components/Toastify/Toastify";
import CartContextProvider from "./contexts/CartContextProvider";
import AuthContextProvider from "./contexts/AuthContextProvider";

function App() {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <ProductContextProvider>
          <Toastify />
          <MyRoutes />
        </ProductContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  );
}

export default App;
