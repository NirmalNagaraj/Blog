import React, { useState } from 'react';
import axios from 'axios'; 
import baseURL from '../api/url';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CreateForm = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
 
  const [isVisible, setIsVisible] = useState(true); 

  const handleTitleChange = (e) => {
    setTitle(e.target.value); 
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleCloseClick = () => {
    setIsVisible(false); 
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseURL}/api/blogs`, {
        title,
        description,
        link
      });
      alert(response.statusText); 
      console.log('Response:', response.data);
      setTitle('');
      setDescription('');
      setLink('');
      setIsVisible(false);
      if (typeof onClose === 'function') {
        onClose();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className={`create-form ${isVisible ? 'visible' : ''}`}>
      <div className="close-icon" onClick={handleCloseClick}>
        <FontAwesomeIcon icon={faTimes} />
      </div>

      <h2>Create Blog Post</h2>
      <form onSubmit={handleSubmit} >
        <div className="form-group">
          <input
            type="text"
            placeholder="Link"
            value={link}
            onChange={handleLinkChange}
            required
            style={styles.cbinput}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
            required
            style={styles.cbinput}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Description"
            value={description}
            onChange={handleDescriptionChange}
            required
            rows={4} 
            style={styles.cbtextarea}
          />
        </div>
        <button type="submit" style={styles.cbbutton}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  cbinput: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '10px'
  },
  cbtextarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '10px',
    resize: 'vertical'
  },
  cbbutton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },

};

export default CreateForm;
