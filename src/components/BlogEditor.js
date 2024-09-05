import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { addBlog, editBlog } from '../features/blogsSlice';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const categories = ['Technology', 'Travel', 'Food', 'Lifestyle']; // Add more categories as needed

const BlogEditor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [categoryError, setCategoryError] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const blogs = useSelector((state) => state.blogs.blogs);

  useEffect(() => {
    if (id) {
      const blog = blogs.find((blog) => blog.id === parseInt(id));
      if (blog) {
        setTitle(blog.title);
        setContent(blog.content);
        setCategory(blog.category || '');
      }
    }
  }, [id, blogs]);

  const handleSubmit = () => {
    if (!title || !content || !category) {
      setCategoryError(!category);
      alert('Please fill in all fields including the category.');
      return;
    }

    const blogData = {
      id: id ? parseInt(id) : Date.now(),
      title,
      content,
      category,
      date: new Date().toLocaleDateString(),
    };

    if (id) {
      dispatch(editBlog(blogData));
    } else {
      dispatch(addBlog(blogData));
    }

    navigate('/');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ReactQuill value={content} onChange={setContent} placeholder='Write Your Blog Content here...' className='h-977'/>
      <div>
        <label>
          Category <span style={{ color: 'red' }}>*</span>
        </label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        {categoryError && (
          <p style={{ color: 'red' }}>Please select a category.</p>
        )}
      </div>
      <button onClick={handleSubmit}>
        {id ? 'Update Blog' : 'Save Blog'}
      </button>
    </div>
  );
};

export default BlogEditor;
