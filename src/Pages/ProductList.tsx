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
import "./ProductList.css";
import { Link } from "react-router-dom";

type Products = {
  id: number;
  name: string;
  price: number;
  image: string;
};
type ProductListProps = {
  products: Products[];
};
const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const { addToCart, addToWishlist, wishListItems } = useCart();
  const isItemInWishList = (productId: number) => {
    return wishListItems.some((item) => item.id === productId);
  };
  return (
    <div className="productContainer">
      <Container>
        <List>
          {products.map((item) => (
            <ListItem key={item.id}>
              <Card
                sx={{
                  width: "40%",
                  padding: "10px",
                  margin: "10px",
                  minWidth: "90%",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  alt={item.name}
                />
                <Typography variant="body1">
                  <div>Name: {item.name}</div> Price: ₹{item.price}
                  <Link to={`/productItem/${item.id}`} className="productLink">
                    <Button> View in Details</Button>
                  </Link>
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => addToCart(item)}
                  sx={{ margin: "5px" }}
                >
                  Add To Cart
                </Button>
                <Button
                  variant="contained"
                  onClick={() => addToWishlist(item)}
                  disabled={isItemInWishList(item.id)}
                >
                  Add To Wish List
                </Button>
              </Card>
            </ListItem>
          ))}
        </List>
      </Container>
    </div>
  );
};

export default ProductList;
