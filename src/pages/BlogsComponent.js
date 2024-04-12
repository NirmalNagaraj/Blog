import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import baseURL from '../api/url';

const styles = {
  bcContainer: {
    padding: '60px',
  },
  bcCardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: '800px',
    margin: '0 auto',
  },
  bcCard: {
    width: 'calc(50% - 20px)',
    maxWidth: '400px',
    maxHeight: '400px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '20px',
    boxSizing: 'border-box',
    overflow: 'hidden',
    cursor: 'pointer',
  },
  bcCardImage: {
    width: '100%',
    height: 'auto',
    marginBottom: '10px',
    borderRadius: '5px',
    objectFit: 'cover',
  },
  bcDescription: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    marginBottom: 0,
    textAlign: 'left',
  },
  bcPostedOn: {
    textAlign: 'left',
    fontStyle: 'italic',
    marginBottom: '5px',
  },
  bcTitle: {
    textAlign: 'left',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
};

const BlogsComponent = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/getBlogs`);
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
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

  return (
    <div style={styles.bcContainer}>
      <div style={styles.bcCardsContainer}>
        {blogs.map(blog => (
          <div key={blog.id} style={styles.bcCard} onClick={() => navigateToBlogDetail(blog.title)}>
            {blog.thumbnail && (
              <img src={`${baseURL}/upload/${blog.thumbnail}`} alt="Thumbnail" style={styles.bcCardImage} />
            )}
            <p style={styles.bcPostedOn}>Posted on: {formatTimestamp(blog.created_at)}</p>
            <h2 style={styles.bcTitle}>{blog.title}</h2>
            <p style={styles.bcDescription}>{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsComponent;
