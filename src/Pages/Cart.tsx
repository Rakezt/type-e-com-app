import {
  Button,
  Card,
  CardMedia,
  Container,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { useCart } from "../context/cartContext";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const Cart = () => {
  const { cartItems, removeFromCart, addQuantity, minusQuantity, totalPrice } =
    useCart();

  return (
    <div>
      <Container>
        {cartItems.length === 0 ? (
          <Typography
            variant="h5"
            sx={{ display: "flex", justifyContent: "center", margin: "170px" }}
          >
            Cart is Empty
          </Typography>
        ) : (
          <List>
            {cartItems.map((item) => (
              <ListItem key={item.id}>
                <Card
                  sx={{
                    width: "40%",
                    padding: "10px",
                    margin: "10px",
                    minWidth: "90%",
                  }}
                >
                  {" "}
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.name}
                  />
                  <div>Item : {item.name} </div>{" "}
                  <div>Price : ₹{item.price}</div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    Quantity : {item.quantity}
                    <AddCircleIcon
                      color="primary"
                      aria-label="add"
                      onClick={() => addQuantity(item)}
                      sx={{ cursor: "pointer", marginLeft: "5px" }}
                    ></AddCircleIcon>
                    <RemoveCircleIcon
                      color="primary"
                      aria-label="add"
                      onClick={() => minusQuantity(item)}
                      sx={{ cursor: "pointer", marginLeft: "5px" }}
                    ></RemoveCircleIcon>
                  </div>
                  <div>
                    <Button
                      variant="contained"
                      sx={{ margin: "5px" }}
                      onClick={() => removeFromCart({ id: item.id })}
                    >
                      Remove item
                    </Button>
                  </div>
                </Card>
              </ListItem>
            ))}
          </List>
        )}
        <Card
          sx={{
            width: "40%",
            padding: "10px",
            margin: "10px",
            minWidth: "90%",
          }}
        >
          <Typography variant="h5" sx={{ marginLeft: "30px" }}>
            Total Price: ₹{totalPrice}
          </Typography>
        </Card>
      </Container>
    </div>
  );
};

export default Cart;
