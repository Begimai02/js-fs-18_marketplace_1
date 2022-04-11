import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Products from "./pages/Products";
import List from "./components/Admin/List/List";
import Add from "./components/Admin/Add/Add";
import Edit from "./components/Admin/Edit/Edit";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import RequireAuth from "./components/Auth/RequireAuth";
import NoMatch from "./pages/NoMatch";
import ProdDetail from "./pages/ProdDetail";

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/admin"
          element={
            <RequireAuth>
              <Admin />
            </RequireAuth>
          }
        >
          <Route index element={<List />} />
          <Route path="add" element={<Add />} />
          <Route path="edit/:id" element={<Edit />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/detail/:prodId" element={<ProdDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
