import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import baseURL from '../api/url';
import './BlogsComponent.css';

const BlogsComponent = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/getBlogs`);
        setBlogs(response.data);
      } catch (error) {
        setError('Error fetching blogs');
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const navigateToBlogDetail = (title) => {
    navigate(`/blog/${encodeURIComponent(title)}`);
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bc-container">
      <div className="bc-cards-container">
        {blogs.map(blog => (
          <div key={blog.id} className="bc-card" onClick={() => navigateToBlogDetail(blog.title)}>
            {blog.thumbnail && (
              <img src={blog.thumbnail} alt="Thumbnail" className="bc-card-image" />
            )}
            <p className="bc-posted-on">Posted on: {formatTimestamp(blog.created_at)}</p>
            <h2 className="bc-title">{blog.title}</h2>
            <p className="bc-description">{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsComponent;
