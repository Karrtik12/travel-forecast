import React, { createRef, useEffect, useState } from "react";
import {
  ContainerStyled,
  FormControlStyled,
  ListStyled,
  Loading,
} from "./style";
import {
  CircularProgress,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({
  childClicked,
  places,
  isLoading,
  type,
  setType,
  rating,
  setRating,
}) => {
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    const refs = Array(places?.length)
      .fill()
      .map((_, i) => elRefs[i] || createRef());
    setElRefs(refs);
  }, [places]);

  return (
    <ContainerStyled>
      <Typography variant="h4">
        Restaurants, Hotels & Attractions around you
      </Typography>
      {isLoading ? (
        <Loading>
          <CircularProgress size="5rem" />
        </Loading>
      ) : (
        <>
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
                <PlaceDetails
                  place={place}
                  selected={Number(childClicked) === index}
                  refProp={elRefs[index]}
                />
              </Grid>
            ))}
          </ListStyled>
        </>
      )}
    </ContainerStyled>
  );
};

export default List;
