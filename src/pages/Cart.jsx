import React, { useEffect } from "react";
import { useCart } from "../contexts/CartContextProvider";
import { Link } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton, Typography } from "@mui/material";
import { Button, Container } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Cart = () => {
  const { cart, getCart, changeProductCount, deleteProdInCart } = useCart();

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div>
      <Container maxWidth="lg">
        <h1>Cart</h1>
        {cart?.products.length > 0 ? (
          <>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>Title</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="center">
                      Type
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                      Image
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                      Price
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                      Subprice
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                      Count
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                      Del
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.products.map((elem) => (
                    <TableRow
                      key={elem.item.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {elem.item.title}
                      </TableCell>
                      <TableCell align="center">{elem.item.type}</TableCell>
                      <TableCell align="right">
                        <img
                          width="40px"
                          src={elem.item.img}
                          alt={elem.item.title}
                        />
                      </TableCell>
                      <TableCell align="right">{elem.item.price}</TableCell>
                      <TableCell align="right">{elem.subPrice}</TableCell>
                      <TableCell align="right">
                        <IconButton
                          onClick={() =>
                            changeProductCount(elem.count + 1, elem.item.id)
                          }
                        >
                          <AddIcon />
                        </IconButton>

                        {elem.count}

                        <IconButton
                          onClick={() =>
                            changeProductCount(elem.count - 1, elem.item.id)
                          }
                        >
                          <RemoveIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell align="right">
                        <IconButton
                          onClick={() => deleteProdInCart(elem.item.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Typography variant="h4">
              Total price: ${cart.totalPrice}
            </Typography>
            <Button variant="contained">BUY NOW FOR ${cart.totalPrice}</Button>
          </>
        ) : (
          <div style={{ textAlign: "center" }}>
            <img
              width="25%"
              src="https://thumbs.dreamstime.com/z/girl-beautiful-dress-supermarket-9827992.jpg"
              alt=""
            />
            <br />
            <Button variant="contained" component={Link} to="/products">
              Go shopping
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Cart;
