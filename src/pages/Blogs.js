import React, { useState } from 'react';
import BlogsComponent from './BlogsComponent';
import Navbar from '../component/navBar';

const styles = {
  bpContainer: {
    padding: '60px',
    paddingTop: '80px',
    display: 'flex',
    justifyContent: 'center', // Center content horizontally
  },
  bpCardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center', // Center cards horizontally
    maxWidth: '1200px', // Max width for laptop screens
  },
  bpCard: {
    width: 'calc(50% - 20px)', // Two cards per row on laptops
    margin: '10px',
  },
  '@media (max-width: 768px)': {
    bpCard: {
      width: 'calc(100% - 20px)', // One card per row on mobile
    },
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
        <div style={styles.bpCardsContainer}>
          <BlogsComponent />
        </div>
      </div>
    </>
  );
};

export default BlogsPage;
