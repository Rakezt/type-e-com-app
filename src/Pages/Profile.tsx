import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useCart } from "../context/cartContext";

const Profile: React.FC = () => {
  const { cartItems, wishListItems } = useCart();
  const [openOrders, setOpenOrders] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [openCoupons, setOpenCoupons] = useState(false);
  const [openHelpCenter, setOpenHelpCenter] = useState(false);

  const handleOpen =
    (setOpen: React.Dispatch<React.SetStateAction<boolean>>) => () => {
      setOpen(true);
    };

  const handleClose =
    (setOpen: React.Dispatch<React.SetStateAction<boolean>>) => () => {
      setOpen(false);
    };

  return (
    <Container>
      <Card sx={{ margin: "10px", padding: "10px" }}>
        <Avatar sx={{ backgroundColor: "grey" }}></Avatar>
        <Typography
          variant="body1"
          sx={{ fontSize: "16px", marginLeft: "5px" }}
        >
          <p>
            <strong>Name: </strong> Alexander Shustov
          </p>
          <p>
            <strong>Address: </strong> 39 John Dalton St, Manchester M2 6FW,
            United Kingdom
          </p>
        </Typography>
        <Container sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{ width: 500, display: "flex", alignItems: "center" }}>
            <Box
              key="orders-box"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                variant="contained"
                sx={{ margin: "10px", padding: "10px" }}
                onClick={handleOpen(setOpenOrders)}
              >
                Orders
              </Button>
              <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={openOrders}
                onClose={handleClose(setOpenOrders)}
                message="Order history is 0"
                key={"orders-snackbar"}
              />
            </Box>
          </Box>
          <Box sx={{ width: 500, display: "flex", alignItems: "center" }}>
            <Box
              key="wishlist-box"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                variant="contained"
                sx={{ margin: "10px", padding: "10px" }}
                onClick={handleOpen(setOpenWishlist)}
              >
                Cart
              </Button>
              <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={openWishlist}
                onClose={handleClose(setOpenWishlist)}
                message={
                  cartItems.length === 0
                    ? "Items in cart is 0"
                    : `Items in cart is ${cartItems.length}`
                }
                key={"wishlist-snackbar"}
              />
            </Box>
          </Box>
          <Box sx={{ width: 500, display: "flex", alignItems: "center" }}>
            <Box
              key="coupons-box"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                variant="contained"
                sx={{ margin: "10px", padding: "10px" }}
                onClick={handleOpen(setOpenCoupons)}
              >
                Wishlist
              </Button>
              <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={openCoupons}
                onClose={handleClose(setOpenCoupons)}
                message={
                  wishListItems.length === 0
                    ? "Items in wishlist  is 0"
                    : `Items in wishlist  is ${wishListItems.length}`
                }
                key={"coupons-snackbar"}
              />
            </Box>
          </Box>
          <Box sx={{ width: 500, display: "flex", alignItems: "center" }}>
            <Box
              key="helpcenter-box"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                variant="contained"
                sx={{ margin: "10px", padding: "10px" }}
                onClick={handleOpen(setOpenHelpCenter)}
              >
                Help Center
              </Button>
              <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={openHelpCenter}
                onClose={handleClose(setOpenHelpCenter)}
                message="Please dial +91 012345678 for help"
                key={"helpcenter-snackbar"}
              />
            </Box>
          </Box>
        </Container>
        <Typography variant="h5" sx={{ margin: "20px" }}>
          Feedback and Information
        </Typography>
        <p>
          <Button>Terms, Policies and Licenses</Button>
        </p>
        <p>
          <Button>Browse FAQs</Button>
        </p>
      </Card>
    </Container>
  );
};

export default Profile;
