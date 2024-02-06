import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Box } from "@mui/material";
import styled from "styled-components";
import Nav from "./Nav";
const Header = () => {
  return (
    <AppBar position="fixed">
      <Box
        sx={{
          bgcolor: "rgb(98 84 243);",
          boxShadow: 1,
          borderRadius: 2,
          p: 0.5,
          minWidth: 300,
        }}
      >
        <MainHeader>
          <NavLink to="/">
            <img src="./images/brand.gif" alt=" my logo img" />
          </NavLink>
          <Nav />
        </MainHeader>
      </Box>
    </AppBar>
  );
};

const MainHeader = styled.header`
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 5rem;
  }
`;

export default Header;
