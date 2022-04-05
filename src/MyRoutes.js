import React from "react";
import { Route, Routes } from "react-router-dom";
import Add from "./Components/Admin/Add/Add";
import Edit from "./Components/Admin/Edit/Edit";
import Form from "./Components/Admin/Form/Form";
import List from "./Components/Admin/List/List";
import MainLayout from "./layout/MainLayout";
import About from "./Pages/About";
import Admin from "./Pages/Admin";
import Home from "./Pages/Home";
import Products from "./Pages/Products";

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/admin" element={<Admin />}>
          <Route index element={<List />} />
          <Route path="add" element={<Add />} />
          <Route path="edit/:id" element={<Edit />} />
          <Route path="form" element={<Form />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default MyRoutes;
