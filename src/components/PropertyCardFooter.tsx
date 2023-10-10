import React from "react";
import { Box, CardContent, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";

import styles from "./property-card.module.scss";

interface PropertyCardFooterProps {
  price: number;
  bedrooms: number;
  bathrooms: number;
  isFavorite: boolean;
  onFavoriteClick(): void;
}

export const PropertyCardFooter = ({
  price,
  bedrooms,
  bathrooms,
  isFavorite,
  onFavoriteClick,
}: PropertyCardFooterProps) => {
  return (
    <CardContent>
      <Box className={styles.rooms_container}>
        <Box className={styles.bedrooms_container}>
          <BathtubIcon />
          <Typography variant="body2" color="text.secondary">
            {bathrooms}
          </Typography>
        </Box>
        <Box className={styles.bathrooms_container}>
          <BedIcon />
          <Typography variant="body2" color="text.secondary">
            {bedrooms}
          </Typography>
        </Box>
      </Box>
      <Box className={styles.actions_container}>
        <IconButton onClick={onFavoriteClick} aria-label="add to favorites">
          <FavoriteIcon color={isFavorite ? "error" : "action"} />
        </IconButton>
        <Typography
          variant="body2"
          color="text.secondary"
          fontWeight={"600"}
          fontSize={24}
        >
          £{price}
        </Typography>
      </Box>
    </CardContent>
  );
};
