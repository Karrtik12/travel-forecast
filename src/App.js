import { CssBaseline, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlacesData } from "./api";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [childClicked, setChildClicked] = useState(null);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    setFilteredPlaces(filteredPlaces);
  }, [rating]);

  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true);
      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(
          data?.filter((place) => place?.name && place?.num_reviews > 0)
        );
        setFilteredPlaces([]);
        setIsLoading(false);
      });
    }
  }, [type, bounds]);

  return (
    <>
      <CssBaseline>
        <Header setCoordinates={setCoordinates} />
        <Grid
          container
          rowSpacing={3}
          columnSpacing={1}
          style={{ width: "100%" }}
        >
          <Grid item xs={12} md={3.5}>
            <List
              childClicked={childClicked}
              places={filteredPlaces?.length ? filteredPlaces : places}
              isLoading={isLoading}
              type={type}
              setType={setType}
              rating={rating}
              setRating={setRating}
            />
          </Grid>
          <Grid item xs={12} md={8.5}>
            <Map
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
              places={filteredPlaces?.length ? filteredPlaces : places}
              setChildClicked={setChildClicked}
            />
          </Grid>
        </Grid>
      </CssBaseline>
    </>
  );
};

export default App;
