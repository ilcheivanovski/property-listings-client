import React from "react";
import { CardContent, CardMedia, Typography } from "@mui/material";

interface PropertyCardContentProps {
  photoUrl: string;
  address: string;
  suburb: string;
  postcode: string;
}

export const PropertyCardContent = ({
  photoUrl,
  address,
  suburb,
  postcode,
}: PropertyCardContentProps) => (
  <CardContent>
    <CardMedia component="img" alt="green iguana" image={photoUrl} />
    <Typography gutterBottom variant="h5" component="div">
      {address}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {suburb} {postcode}
    </Typography>
  </CardContent>
);
