import { IconButton } from "@mui/material";
import { Container } from "@mui/material";
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import AddModeratorIcon from "@mui/icons-material/AddModerator";

const Admin = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <Container maxWidth={"ld"}>
        <h1>Admin page</h1>
        {pathname !== "/admin/add" ? (
          <Link to="add">
            <IconButton>
              <AddModeratorIcon fontSize="large" />
            </IconButton>
          </Link>
        ) : null}
        <Outlet />
      </Container>
    </div>
  );
};

export default Admin;
