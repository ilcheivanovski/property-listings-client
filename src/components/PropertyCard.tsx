import React from "react";
import Card from "@mui/material/Card";
import { PropertyCardContent } from "./PropertyCardContent";
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
      <PropertyCardContent
        photoUrl={photoUrl}
        address={address}
        suburb={suburb}
        postcode={postcode}
      />
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
