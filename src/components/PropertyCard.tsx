import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { PropertyCardFooter } from "./PropertyCardFooter";

interface PropertyCardProps {
  photoUrl: string;
  address: string;
  suburb: string;
  postcode: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  isFavorite: boolean;
  onFavoriteClick(): void;
}

export const PropertyCard = ({
  photoUrl,
  address,
  suburb,
  postcode,
  price,
  bedrooms,
  bathrooms,
  isFavorite,
  onFavoriteClick,
}: PropertyCardProps) => {
  return (
    <Card>
      <CardContent>
        <CardMedia component="img" alt="green iguana" image={photoUrl} />
        <Typography gutterBottom variant="h5" component="div">
          {address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {suburb} {postcode}
        </Typography>
      </CardContent>
      <PropertyCardFooter
        price={price}
        bedrooms={bedrooms}
        bathrooms={bathrooms}
        isFavorite={isFavorite}
        onFavoriteClick={onFavoriteClick}
      />
    </Card>
  );
};
