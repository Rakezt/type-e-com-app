import { Card, CardMedia, Container, Typography } from "@mui/material";
import React from "react";

const Profile = () => {
  return (
    <Container>
      <Card sx={{ margin: "10px", padding: "10px" }}>
        <CardMedia
          component="img"
          height="400"
          image="https://picsum.photos/id/64/1200/1200"
          alt="hero"
        />
        <Typography
          variant="body1"
          sx={{ fontSize: "16px", marginLeft: "5px" }}
        >
          <p>Name: Alexander Shustov</p> <p>Location: Madrid</p>
          <p>Age: 29</p>
          <p>Hobbies: Singing, Hiking, Rock Climbing</p>
        </Typography>
      </Card>
    </Container>
  );
};

export default Profile;
