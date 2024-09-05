import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { toggleTheme } from '../features/themeSlice';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  return (
    <IconButton onClick={() => dispatch(toggleTheme())} color="inherit">
      {theme === 'light' ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default ThemeSwitcher;
