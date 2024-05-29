import { NavLink } from "react-router-dom";
import { useCart } from "../context/cartContext";
import { Avatar, IconButton, Typography } from "@mui/material";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Header.css";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 10,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Home = () => {
  const { cartItems, wishListItems } = useCart();
  return (
    <div className="home">
      <Typography variant="h3" gutterBottom>
        Apple Kart ++
      </Typography>
      <nav className="nav">
        <NavLink to="/" className="navlink left">
          Home
        </NavLink>
        <div className="nav-icons">
          <NavLink to="/cart" className="navlink right">
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={cartItems.length} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </NavLink>

          <NavLink to="/wishlist" className="navlink right">
            <IconButton aria-label="cart">
              <StyledBadge
                badgeContent={wishListItems.length}
                color="secondary"
              >
                <FavoriteIcon />
              </StyledBadge>
            </IconButton>
          </NavLink>
          <NavLink to="/profile" className="navlink right">
            <Avatar sx={{ backgroundColor: "grey" }}></Avatar>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Home;
