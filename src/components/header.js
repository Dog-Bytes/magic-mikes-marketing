import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HeaderContainer, Logo, NavLinks, Img, BurgerList, DesktopMenu, MobileMenu, BurgerMenuButton } from "../styling/headerStyling";
import { useTheme } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LogoImg from "../assets/imgs/magic_mike_logo.png";

export default function Header() {

  const location = useLocation()
  const theme = useTheme();

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideMenu = side => (
    <div>
      <div >
        <IconButton onClick={toggleDrawer('right', false)}>
          {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        <BurgerList>
          <NavLinks exact to="/" onClick={toggleDrawer('right', false)} className="burgerLinks">HOME</NavLinks>
        </BurgerList>
        {/* <Divider />
        <BurgerList>
          <NavLinks to="/about" onClick={toggleDrawer('right', false)} className="burgerLinks">ABOUT US</NavLinks>
        </BurgerList> */}
        <Divider />
        <BurgerList>
          <NavLinks to="/services" onClick={toggleDrawer('right', false)} className="burgerLinks">SERVICES</NavLinks>
        </BurgerList>
        <Divider />
        <BurgerList>
          <NavLinks to="/contact" onClick={toggleDrawer('right', false)} className="burgerLinks">CONTACT</NavLinks>
        </BurgerList>
      </List>
    </div>
  )


  return (
    <HeaderContainer id="headerContainer">
      <Logo id="logoContainer">
          <Img src={LogoImg} alt="Magic Mikes Logo" />
      </Logo>
      <DesktopMenu>
        <NavLinks exact to="/">HOME</NavLinks>
        {/* <NavLinks to="/about">ABOUT US</NavLinks> */}
        <NavLinks to="/services">SERVICES</NavLinks>
        <NavLinks to="/contact">CONTACT US</NavLinks>
      </DesktopMenu>
      {/* Header media query burger menu */}
      <MobileMenu>
        <BurgerMenuButton id="burger" onClick={toggleDrawer('right', true)}><MenuIcon /></BurgerMenuButton>
        <SwipeableDrawer
          anchor="right"
          open={state.right}
          onClose={toggleDrawer('right', false)}
          onOpen={toggleDrawer('right', true)}
          transitionDuration={1000}
          sx={{
            width: 200,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 200,
              boxSizing: 'border-box',
            },
          }}
        >
          {sideMenu('right')}
        </SwipeableDrawer>
      </MobileMenu>
    </HeaderContainer>
  );
}
