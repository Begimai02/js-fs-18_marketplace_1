import { Container, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Admin = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <Container maxWidth="xl">
        <h1>Admin</h1>
        {pathname !== "/admin/add" ? (
          <Link to="add">
            <IconButton>
              <AddCircleIcon fontSize="large" />
            </IconButton>
          </Link>
        ) : null}
        <Outlet />
      </Container>
    </div>
  );
};

export default Admin;
