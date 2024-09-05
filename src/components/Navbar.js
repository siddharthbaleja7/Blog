import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Blog App
        </Typography>
        <Button color="inherit" component={Link} to="/create">
          Create Blog
        </Button>
        <ThemeSwitcher />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
