import React from "react";
import styled from "@emotion/styled";
import { ImportOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import logo from "../assets/images/dumbbell.svg";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HomeButton = styled(Link)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
`;

const Logo = styled.img`
  width: 30px;
  margin: 0 5px;
`;

const ButtonText = styled.span`
  font-size: 1.2rem;
  padding: 0 10px;
  color: black;
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const NavOption = styled(Link)`
  color: #65737e;
  margin: 0 1rem;
  text-decoration: none;
  /* text-transform: uppercase; */
  font-weight: 500;
`;

const NavCSOption = styled(Link)`
  color: #65737e;
  margin: 0 1rem;
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavigationButtons>
        <HomeButton to={"/"}>
          <Logo src={logo} alt="Logo Tabatta" />
          <ButtonText>Tabatta</ButtonText>
        </HomeButton>
        <NavOption to={"/tabatta"}>Tabatta's List</NavOption>
        <NavOption to={"#"}>Profile</NavOption>
      </NavigationButtons>

      <NavCSOption to={"/login"}>
        <ImportOutlined /> Log Out
      </NavCSOption>
    </NavbarContainer>
  );
};

export default Navbar;
