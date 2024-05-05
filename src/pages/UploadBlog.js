import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateForm from '../component/CreateForm';
import EditForm from '../component/EditForm'; 
import baseURL from '../api/url';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'; 

const styles = {
  ubContainer: {
    padding: '30px', /* Reduced padding for smaller screens */
    overflowY: 'auto', /* Enable vertical scrolling */
  },
  ubHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  ubTitle: {
    fontSize: '24px', /* Larger font size for title on smaller screens */
    marginBottom: '10px', /* Reduced margin for smaller screens */
  },
  ubCreateButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  ubCardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: '800px', 
    margin: '0 auto', 
    marginBottom: '20px', /* Add margin at the bottom */
  },
  ubCard: {
    position: 'relative', 
    width: 'calc(50% - 20px)', /* Display two cards per row on larger screens */
    maxWidth: '400px', 
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px', 
    marginBottom: '20px',
    boxSizing: 'border-box',
    
  },
  ubCardImage: {
    width: '100%',
    height: 'auto',
    marginBottom: '10px',
    borderRadius: '5px',
    objectFit: 'cover',
  },
  ubDescription: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    marginBottom: 0,
  },
  ubIcon: {
    marginRight: '5px', 
  },
  ubPencilIcon: {
    position: 'absolute',
    bottom: '5px',
    right: '5px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '50%',
    padding: '5px',
    cursor: 'pointer',
    color: 'white',
    zIndex: 1,
  },
};

const UploadBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [createFormVisible, setCreateFormVisible] = useState(false);
  const [editFormVisible, setEditFormVisible] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedDescription, setSelectedDescription] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/getBlogs`);
        setBlogs(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchData();
  }, [createFormVisible, editFormVisible]); 

  const handleCreateButtonClick = () => {
    setCreateFormVisible(true);
  };

  const handleCloseCreateForm = () => {
    setCreateFormVisible(false);
  };

  const handleCloseEditForm = () => {
    setEditFormVisible(false);
  };

  const handleEdit = (title, description) => {
    setSelectedTitle(title);
    setSelectedDescription(description);
    setEditFormVisible(true);
  };

  return (
    <div style={styles.ubContainer}>
      <div style={styles.ubHeader}>
        <h1 style={styles.ubTitle}>Blog Page</h1>
        <button style={styles.ubCreateButton} onClick={handleCreateButtonClick}>Create</button>
      </div>

      {createFormVisible && <CreateForm onClose={handleCloseCreateForm} />}

      {editFormVisible && <EditForm onClose={handleCloseEditForm} title={selectedTitle} description={selectedDescription} />}

      <div style={styles.ubCardsContainer}>
        {blogs.map(blog => (
          <div key={blog.id} style={{ ...styles.ubCard }}> {/* Adjusting card width for smaller screens */}
            {blog.thumbnail && (
              <img src={`${blog.thumbnail}`} alt="Thumbnail" style={styles.ubCardImage} />
            )}
            <h2 style={{ textAlign: 'left' }}>
              {blog.title}
            </h2>
            <p style={{ ...styles.ubDescription, textAlign: 'left' }}>{blog.description}</p>
            <FontAwesomeIcon icon={faPencilAlt} style={styles.ubPencilIcon} onClick={() => handleEdit(blog.title, blog.description)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadBlogs;
