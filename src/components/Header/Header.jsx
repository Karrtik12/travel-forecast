import { SearchOutlined } from "@mui/icons-material";
import { AppBar, Box } from "@mui/material";
import React, { useState } from "react";
import {
  Title,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  ToolbarStyled,
} from "./style";
import { Autocomplete } from "@react-google-maps/api";

const Header = ({ setCoordinates }) => {
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    try {
      const lat = autocomplete?.getPlace().geometry.location.lat();
      const lng = autocomplete?.getPlace().geometry.location.lng();
      setCoordinates({ lat, lng });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AppBar position="static">
      <ToolbarStyled>
        <Title variant="h5">TravelForecast</Title>
        <Box display="flex" alignItems="center">
          <Title variant="h6">Forecast Your Adventure</Title>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <Search>
              <SearchIconWrapper>
                <SearchOutlined />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search..." />
            </Search>
          </Autocomplete>
        </Box>
      </ToolbarStyled>
    </AppBar>
  );
};

export default Header;
