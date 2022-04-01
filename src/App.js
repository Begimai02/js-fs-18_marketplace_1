import "./App.css";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MyRoutes from "./MyRoutes";

function App() {
  return (
    <ProductContextProvider>
      <MyRoutes />
    </ProductContextProvider>
  );
}

export default App;
