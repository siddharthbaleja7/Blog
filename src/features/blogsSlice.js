import { createSlice } from '@reduxjs/toolkit';

const initialBlogs = [
  {
    id: 1,
    title: 'Exploring Technology Trends',
    content: 'Technology is evolving rapidly. In this post, we explore the latest trends in tech...',
    category: 'Technology',
    date: '2024-09-01',
    image: 'https://example.com/images/tech.jpg', // Replace with actual image URL
  },
  {
    id: 2,
    title: 'A Culinary Journey Through Italy',
    content: 'Italy is known for its rich culinary heritage. Join us as we explore the best dishes...',
    category: 'Food',
    date: '2024-09-02',
    image: 'https://example.com/images/food.jpg', // Replace with actual image URL
  },
  {
    id: 3,
    title: 'The Wonders of Travel',
    content: 'Travel opens up new worlds and experiences. This blog covers some amazing destinations...',
    category: 'Travel',
    date: '2024-09-03',
    image: 'https://th-thumbnailer.cdn-si-edu.com/KPHiwfaC7pBGVYeQOt3_RF6L4Dw=/800x450/filters:focal(1471x1061:1472x1062)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg', // Replace with actual image URL
  },
];

const blogsSlice = createSlice({
  name: 'blogs',
  initialState: {
    blogs: initialBlogs,
  },
  reducers: {
    addBlog: (state, action) => {
      state.blogs.push(action.payload);
    },
    editBlog: (state, action) => {
      const index = state.blogs.findIndex(blog => blog.id === action.payload.id);
      if (index !== -1) {
        state.blogs[index] = action.payload;
      }
    },
    deleteBlog: (state, action) => {
      state.blogs = state.blogs.filter(blog => blog.id !== action.payload);
    },
  },
});

export const { addBlog, editBlog, deleteBlog } = blogsSlice.actions;
export default blogsSlice.reducer;
