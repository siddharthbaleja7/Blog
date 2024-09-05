import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const categories = useSelector((state) => state.categories.categories);

  return (
    <List>
      <ListItem button component={Link} to="/">
        <ListItemText primary="All Blogs" />
      </ListItem>
      {categories.map((category) => (
        <ListItem button key={category} component={Link} to={`/category/${category}`}>
          <ListItemText primary={category} />
        </ListItem>
      ))}
    </List>
  );
};

export default Sidebar;
