import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Hidden from '@mui/material/Hidden';
import Colors from '../atoms/Colors';
import Logo from '../atoms/Logo';

function Navbar({ authUser, signOut }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Article', path: '/articles' },
    { label: 'Destination', path: '/destinations' },
    { label: 'About Us', path: '/about-us' },
  ];

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 6 }}>
      <AppBar position="fixed" sx={{ background: Colors.secondary.soft, boxShadow: 'none' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Logo />
            <Hidden smDown>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
                {menuItems.map((item) => (
                  <Typography
                    component={Link}
                    variant="body1"
                    key={item.label}
                    to={item.path}
                    sx={{
                      fontWeight: 'bold',
                      textDecoration: 'none',
                      color: Colors.primary.soft,
                      margin: '0 10px',
                      borderBottom: location.pathname === item.path ? `2px solid ${Colors.primary.soft}` : 'none',
                    }}
                  >
                    {item.label}
                  </Typography>
                ))}
              </Box>
              {authUser ? (
                <Button variant="contained" size="small" onClick={signOut}>Sign Out</Button>
              ) : (
                <Button variant="contained" size="small" component={Link} to="/login">Login</Button>
              )}
            </Hidden>
            <Hidden smUp>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                {authUser ? (
                  <Button variant="contained" size="small" onClick={signOut}>Sign Out</Button>
                ) : (
                  <Button variant="contained" size="small" component={Link} to="/login">Login</Button>
                )}
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenuOpen}
                  sx={{ color: Colors.primary.soft }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{
                  '& .MuiPaper-root': {
                    backgroundColor: Colors.secondary.soft,
                  },
                }}
              >
                {menuItems.map((item) => (
                  <MenuItem
                    key={item.label}
                    onClick={handleMenuClose}
                    component={Link}
                    to={item.path}
                    sx={{
                      color: Colors.primary.hard,
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      backgroundColor: location.pathname === item.path ? Colors.primary.light : 'inherit',
                    }}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

const authUserShape = {
  id: PropTypes.string,
  user: PropTypes.string.isRequired,
};

Navbar.propTypes = {
  authUser: PropTypes.shape(authUserShape),
  signOut: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  authUser: null,
};

export default Navbar;
