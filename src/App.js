import "./App.css";
import Toastify from "./components/Toastify/Toastify";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MyRoutes from "./MyRoutes";

function App() {
  return (
    <ProductContextProvider>
      <Toastify />
      <MyRoutes />
    </ProductContextProvider>
  );
}

export default App;
