import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BlogDetails = () => {
  const { id } = useParams();
  const blog = useSelector((state) =>
    state.blogs.blogs.find((blog) => blog.id === parseInt(id))
  );

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.date}</p>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
};

export default BlogDetails;
