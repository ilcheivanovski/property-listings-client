import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Box, CircularProgress, Grid } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";

import { IProperty } from "../../models/property";
import { RootState, useAppDispatch } from "../../store";
import { getProperties, addFavorite } from "./propertyApi";
import { PropertyCard } from "../../components/PropertyCard";

export const Property = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProperties());
  }, [dispatch]);

  const propertyList: IProperty[] = useSelector(
    (state: RootState) => state.property.list.values
  );
  const isLoadingList = useSelector(
    (state: RootState) => state.property.list.isLoading
  );
  const isSaving = useSelector(
    (state: RootState) => state.property.save.isSaving
  );

  return (
    <Box style={{ padding: "40px 140px" }}>
      <Grid
        container
        gap={1}
        display={"grid"}
        gridTemplateColumns={"repeat(auto-fill, minmax(250px, 1fr))"}
      >
        {(isLoadingList || isSaving) && (
          <CircularProgress
            size={60}
          />
        )}
        {propertyList.map((property) => (
          <Grid item key={property.id}>
            <PropertyCard
              photoUrl={property.photoUrl}
              address={property.address}
              suburb={property.suburb}
              postcode={property.postcode}
              price={property.price}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              isFavorite={property.isFavorite}
              onFavoriteClick={() => {
                dispatch(
                  addFavorite({
                    ...property,
                    isFavorite: !property.isFavorite,
                  })
                )
                  .unwrap()
                  .then((response) => {
                    toast.success(
                      `Item ${!property.isFavorite ? "added" : "removed"} ${
                        !property.isFavorite ? "to" : "from"
                      } favorites!`
                    );
                    dispatch(getProperties());
                  })
                  .catch((error) => {
                    toast.error("Error");
                  });
                toast.success(property);
              }}
            />
          </Grid>
        ))}
      </Grid>
      <ToastContainer closeOnClick={true} />
    </Box>
  );
};
