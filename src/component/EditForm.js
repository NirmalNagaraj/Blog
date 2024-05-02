import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'; 
import baseURL from '../api/url';

const styles = {
  efContainer: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
    zIndex: '1000',
    width: '500px', 
    height: '500px'
  },
  efHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  efTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0',
  },
  efInput: {
    width: '100%',
    padding: '15px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '20px',
    boxSizing: 'border-box',
  },
  efTextarea: {
    width: '100%',
    maxHeight: '200px',
    minHeight: '200px',
    padding: '15px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '20px',
    resize: 'vertical',
    boxSizing: 'border-box',
  },
  efButtonContainer: {
    textAlign: 'center',
  },
  efButton: {
    padding: '25px 30px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft: '10px',
  },
  efDeleteIcon: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
    color: '#FF0000',
    fontSize: '20px',
    paddingRight:'50px',
    paddingTop:'20px'
  },
};

const EditForm = ({ onClose, title: defaultTitle, description: defaultDescription }) => {
  const [title, setTitle] = useState(defaultTitle);
  const [description, setDescription] = useState(defaultDescription);
  

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${baseURL}/api/blogUpdate/${defaultTitle}`, {
        newTitle: title,
        newDescription: description,
      });
      onClose();
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  const handleDelete = async () => {
    // Show confirmation dialog
    const confirmDelete = window.confirm('Are you sure you want to delete this blog?');
    if (confirmDelete) {
      try {
        await axios.delete(`${baseURL}/api/blogDelete/${defaultTitle}`);
        onClose();
      } catch (error) {
        console.error('Error deleting blog:', error);
      }
    }
  };

  return (
    <div style={styles.efContainer}>
      <div style={styles.efHeader}>
        <h2 style={styles.efTitle}>Edit Blog Post</h2>

        <FontAwesomeIcon icon={faTrash} style={styles.efDeleteIcon} onClick={handleDelete} />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
          required
          style={styles.efInput}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={handleDescriptionChange}
          required
          rows={4}
          style={styles.efTextarea}
        />
        <div style={styles.efButtonContainer}>
          <button type="button" style={styles.efButton} onClick={onClose}>
            Cancel
          </button>
          <button type="submit" style={styles.efButton}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
