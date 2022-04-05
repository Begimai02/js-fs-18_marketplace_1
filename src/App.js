import "./App.css";
import MyRoutes from "./MyRoutes";
import ProductContextProvider from "./contexts/ProductContextProvider";

function App() {
  return (
    <div>
      <ProductContextProvider>
        <MyRoutes />
      </ProductContextProvider>
    </div>
  );
}

export default App;
