import { useMediaQuery } from "@mui/system";
import React from "react";
import GoogleMapReact from "google-map-react";
import { MapContainer, MarkerContainer, PaperStyled } from "./style";
import { LocationOnOutlined } from "@mui/icons-material";
import { Rating, Typography } from "@mui/material";
import { mapStyles } from "./mapStyles";

const Map = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
}) => {
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY }}
        defaultCenter={{ lat: 0, lng: 0 }}
        center={coordinates}
        defaultZoom={14}
        margin={[]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        onChange={(e) => {
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.length &&
          places.map((place, i) => (
            <MarkerContainer
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              {!isDesktop ? (
                <LocationOnOutlined color="primary" fontSize="large" />
              ) : (
                <PaperStyled elevation={3}>
                  <Typography variant="subtitle2" gutterBottom>
                    {" "}
                    {place.name}
                  </Typography>
                  <img
                    alt="img"
                    src={
                      place.photo
                        ? place.photo.images.large.url
                        : "https://rishikeshcamps.in/wp-content/uploads/2023/05/restaarant.jpg"
                    }
                  />
                  <Rating
                    name="read-only"
                    size="small"
                    value={Number(place.rating)}
                    readOnly
                  />
                </PaperStyled>
              )}
            </MarkerContainer>
          ))}
      </GoogleMapReact>
    </MapContainer>
  );
};

export default Map;
