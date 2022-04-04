import { Container, IconButton } from "@mui/material";
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Admin = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <Container maxWidth={"md"}>
        <h1>Admin Page</h1>
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
