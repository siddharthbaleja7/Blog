import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BlogDetails from './components/BlogDetails';
import CategoryPage from './components/CategoryPage';
import BlogEditor from './components/BlogEditor';

function App() {
  const theme = useSelector((state) => state.theme.theme);
  const themeMode = createTheme({
    palette: {
      mode: theme,
    },
  });

  return (
    <ThemeProvider theme={themeMode}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/create" element={<BlogEditor />} />
          <Route path="/edit/:id" element={<BlogEditor />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
