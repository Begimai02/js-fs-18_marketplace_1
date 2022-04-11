import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../../../contexts/CartContextProvider";
import { Link } from "react-router-dom";

export default function OneProduct({ item }) {
  const { addDelCart, isProdInCart } = useCart();
  const [inCart, setInCart] = React.useState(isProdInCart(item.id));
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={item.img}
          alt={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="h6" color="green">
            ${item.price}
          </Typography>
          <Typography variant="body1">Type: {item.type}</Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>

        <CardActions>
          <IconButton
            color={inCart ? "secondary" : "inherit"}
            onClick={() => {
              addDelCart(item);
              setInCart(isProdInCart(item.id));
            }}
          >
            <ShoppingCartIcon />
          </IconButton>
          <Button component={Link} to={`detail/${item.id}`} size="small">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
