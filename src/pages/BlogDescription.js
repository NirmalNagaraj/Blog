import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import baseURL from '../api/url';

const styles = {
  bdContainer: {
    padding: '60px',
    maxHeight: 'calc(100vh - 20px)', 
    overflowY: 'auto',
    overflowX:'hidden',
  },
  bdContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  bdImage: {
    width: '80%',
    height:'350px',
    borderRadius: '15px',
    marginBottom: '20px',
  },
  bdTextContainer: {
    textAlign: 'left',
    width: '80%',
  },
  bdTitle: {
    fontWeight: 'bold',
    fontSize: '48px',
    marginBottom: '10px',
  },
  bdDescription: {
    fontSize: '25px',
  },
};

const BlogDescription = () => {
  const { title } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/getBlogByTitle/${encodeURIComponent(title)}`);
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [title]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.bdContainer}>
      <div style={styles.bdContent}>
        {blog.thumbnail && (
          <img src={`${baseURL}/upload/${blog.thumbnail}`} alt="Thumbnail" style={styles.bdImage} />
        )}
        <div style={styles.bdTextContainer}>
          <h1 style={styles.bdTitle}>{blog.title}</h1>
          <p style={styles.bdDescription}>{blog.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDescription;
