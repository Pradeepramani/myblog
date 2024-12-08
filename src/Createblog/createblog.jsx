import axios from 'axios';
import './createblog.css';
import { useState } from 'react';

function Createblog() {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [blog, setBlog] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    // Validate fields before submission
    if (!title || !type || !description || !blog) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    const blogData = {
      title,
      type,
      description,
      blog,
    };

    try {
      const response = await axios.post('http://localhost:6800/api/blog/load', blogData, {
        withCredentials: true, // If cookies or authentication are required
      });

      console.log('Response:', response.data);
      alert('Blog submitted successfully!');
      
      // Clear form fields after successful submission
      setTitle('');
      setType('');
      setDescription('');
      setBlog('');
    } catch (error) {
      console.error('Error loading blog data:', error.response?.data || error.message);
      alert('Unable to load data. Please try again later.');
    }
  }

  return (
    <>
      <div className="blogpage">
        <form onSubmit={handleSubmit}>
          <h1>Title</h1>
          <textarea
            className="title textarea"
            placeholder="Enter the blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <h1>Type</h1>
          <textarea
            className="type textarea"
            placeholder="Enter the blog type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <h1>Description</h1>
          <textarea
            className="description textarea"
            placeholder="Enter a short description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <h1>Blog</h1>
          <textarea
            className="blog textarea"
            placeholder="Write your blog content here"
            value={blog}
            onChange={(e) => setBlog(e.target.value)}
          />
          <button type="submit">Load the blog</button>
        </form>
      </div>
    </>
  );
}

export default Createblog;
