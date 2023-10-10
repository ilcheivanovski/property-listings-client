import { Box, CardContent, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";

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
      <Box
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          marginBottom: 10,
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <BathtubIcon />
          <Typography variant="body2" color="text.secondary">
            {bathrooms}
          </Typography>
        </Box>
        <Box style={{ display: "flex", flexDirection: "row", marginRight: 10 }}>
          <BedIcon />
          <Typography variant="body2" color="text.secondary">
            {bedrooms}
          </Typography>
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
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
