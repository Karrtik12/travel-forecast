import React, { useState } from "react";
import { ContainerStyled, FormControlStyled, ListStyled } from "./style";
import { Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({ places }) => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  return (
    <ContainerStyled>
      <Typography variant="h4">
        Restaurants, Hotels & Attractions around you
      </Typography>
      <FormControlStyled>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControlStyled>
      <FormControlStyled>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>3+</MenuItem>
          <MenuItem value={4}>4+</MenuItem>
          <MenuItem value={4.5}>4.5+</MenuItem>
        </Select>
      </FormControlStyled>
      <ListStyled container spacing={3}>
        {places?.map((place, index) => (
          <Grid item key={index} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </ListStyled>
    </ContainerStyled>
  );
};

export default List;
