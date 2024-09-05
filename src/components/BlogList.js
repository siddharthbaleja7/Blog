import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteBlog } from '../features/blogsSlice';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

const BlogList = ({ blogs, filterCategory }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      dispatch(deleteBlog(id));
    }
  };

  const filteredBlogs = filterCategory
    ? blogs.filter((blog) => blog.category === filterCategory)
    : blogs;

  return (
    <div>
      {filteredBlogs.map((blog) => (
        <Card key={blog.id} style={{ marginBottom: '16px' }}>
          {blog.image && (
            <CardMedia
              component="img"
              height="140"
              image={blog.image}
              alt={blog.title}
            />
          )}
          <CardContent>
            <Link to={`/blog/${blog.id}`}>
              <Typography variant="h5">{blog.title}</Typography>
            </Link>
            <Typography color="textSecondary">{blog.date}</Typography>
            <Typography variant="body2">{blog.content.substring(0, 100)}...</Typography>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleDelete(blog.id)}
            >
              Delete
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BlogList;
