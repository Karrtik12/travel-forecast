import { SearchOutlined } from "@mui/icons-material";
import { AppBar, Box } from "@mui/material";
// import { Autocomplete } from "@react-google-maps/api";
import React from "react";
import {
  Title,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  ToolbarStyled,
} from "./style";

const Header = () => {
  return (
    <AppBar position="static">
      <ToolbarStyled>
        <Title variant="h5">TravelForecast</Title>
        <Box display="flex">
          <Title variant="h6">Forecast Your Adventure</Title>
          {/* <Autocomplete> */}
          <Search>
            <SearchIconWrapper>
              <SearchOutlined />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search..." />
          </Search>
          {/* </Autocomplete> */}
        </Box>
      </ToolbarStyled>
    </AppBar>
  );
};

export default Header;
