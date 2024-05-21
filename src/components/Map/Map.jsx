import { useMediaQuery } from "@mui/system";
import React from "react";
import GoogleMapReact from "google-map-react";
import { MapContainer, MarkerContainer, PaperStyled, Pointer } from "./style";
// import { LocationOnOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { LocationOnOutlined } from "@mui/icons-material";

const Map = ({ setCoordinates, setBounds, coordinates, places }) => {
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDsFyXWDOIkNlVNawKecyTjdmnX7lp91AA" }}
        defaultCenter={{ lat: 0, lng: 0 }}
        center={coordinates}
        defaultZoom={14}
        margin={[]}
        options={""}
        onChange={(e) => {
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
        }}
        onChildClick={""}
      >
        {places?.map((place, i) => (
          <MarkerContainer
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!isDesktop ? (
              <LocationOnOutlined />
            ) : (
              <PaperStyled elevation={3}>
                <Typography variant="subtitle2" gutterBottom>
                  {place.name}
                </Typography>
                <Pointer
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://rishikeshcamps.in/wp-content/uploads/2023/05/restaarant.jpg"
                  }
                  alt={place.name}
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
