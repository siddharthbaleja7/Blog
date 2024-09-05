import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BlogList from '../components/BlogList';
import Sidebar from '../components/Sidebar';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const blogs = useSelector((state) => state.blogs.blogs);

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div>
        <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
          <option value="">All Categories</option>
          <option value="Technology">Technology</option>
          <option value="Travel">Travel</option>
          <option value="Food">Food</option>
          <option value="Lifestyle">Lifestyle</option>

        </select>
        <BlogList blogs={blogs} filterCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default HomePage;
