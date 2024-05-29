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

const WishList = () => {
  const { wishListItems, removeFromWishList } = useCart();

  return (
    <div>
      <Container>
        {wishListItems.length === 0 ? (
          <Typography
            variant="h5"
            sx={{ display: "flex", justifyContent: "center", margin: "190px" }}
          >
            Wish List is Empty
          </Typography>
        ) : (
          <List>
            {wishListItems.map((item) => (
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
                  <div>Item : {item.name}</div> Price : ₹{item.price}
                  <Button
                    variant="contained"
                    sx={{ margin: "5px" }}
                    onClick={() => removeFromWishList({ id: item.id })}
                  >
                    Remove item
                  </Button>
                </Card>
              </ListItem>
            ))}
          </List>
        )}
      </Container>
    </div>
  );
};

export default WishList;
