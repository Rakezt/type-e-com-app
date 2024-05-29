import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../components/data";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

const Product: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  if (!id) {
    return <Typography variant="h6">Invalid product ID</Typography>;
  }
  const product = products.find((item) => item.id === parseInt(id, 10));

  if (!product) {
    return <Typography>Product not found</Typography>;
  }
  return (
    <Container>
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
          height="350"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            <strong> Name :</strong> {product.name}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            <strong>Price:</strong> {product.price}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            <strong>Specification : </strong> Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </Typography>
          <Typography variant="h6" color="text.secondary">
            <strong> Description : </strong> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Incidunt officiis animi doloribus vel
            nesciunt esse similique tempora quidem quas nam velit magnam illo,
            aliquid deserunt facilis ipsam dicta eveniet cumque, Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quam ipsa officiis odit
            accusamus tempore vero quibusdam voluptas, voluptates distinctio
            molestiae assumenda at reiciendis iusto laborum explicabo possimus?
            Eveniet, perferendis non!
          </Typography>
          <Button onClick={() => navigate(-1)}>Go Back</Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Product;
