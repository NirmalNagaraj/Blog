import React, { useState } from 'react';
import InstagramBlogs from './InstaBlog';
import BlogsComponent from './BlogsComponent';
import Navbar from '../component/navBar';

const styles = {
  bpContainer: {
    padding: '60px',
    display: 'flex',
    paddingTop: '80px',
    maxHeight: 'calc(100vh - 10px)', 
    overflowY: 'auto', 
  },
  bpButtonsContainer: {
    marginRight: '200px',
    display: 'flex',
    flexDirection: 'column',
    position: 'sticky', 
    top: '20px', 
  },
  bpButton: {
    marginBottom: '10px',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#f0f0f0',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'left',
  },
  bpActiveButton: {
    backgroundColor: '#007bff',
    color: 'white',
  },
};

const BlogsPage = () => {
  const [activeTab, setActiveTab] = useState('blogs'); 


  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Navbar />
      <div style={styles.bpContainer}>
        <div style={styles.bpButtonsContainer}>
          <button
            style={{ ...styles.bpButton, ...(activeTab === 'blogs' ? styles.bpActiveButton : {}) }}
            onClick={() => handleTabClick('blogs')}
          >
            Blogs
          </button>
          <button
            style={{ ...styles.bpButton, ...(activeTab === 'instagram' ? styles.bpActiveButton : {}) }}
            onClick={() => handleTabClick('instagram')}
          >
            Instagram Posts
          </button>
        </div>
        {activeTab === 'blogs' ? <BlogsComponent /> : <InstagramBlogs />}
      </div>
    </>
  );
};

export default BlogsPage;
