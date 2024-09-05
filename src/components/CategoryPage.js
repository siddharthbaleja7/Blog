import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BlogList from './BlogList';

const CategoryPage = () => {
  const { category } = useParams();
  const blogs = useSelector((state) => state.blogs.blogs);

  return (
    <div>
      <h1>{category}</h1>
      <BlogList blogs={blogs} filterCategory={category} />
    </div>
  );
};

export default CategoryPage;
