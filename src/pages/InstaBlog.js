import React, { useState, useEffect } from 'react';
import axios from 'axios';

const styles = {
  ibContainer: {
    padding: '60px',
  },
  ibCardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: '800px', 
    margin: '0 auto',
  },
  ibCard: {
    position: 'relative',
    width: 'calc(50% - 20px)', 
    maxWidth: '400px', 
    maxHeight: '500px', 
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '20px',
    boxSizing: 'border-box',
    overflow: 'hidden',
    cursor: 'pointer', 
  },
  ibCardImage: {
    width: '100%',
    height: 'auto',
    marginBottom: '10px',
    borderRadius: '5px',
    objectFit: 'cover',
  },
  ibCaption: {
    fontSize: '18px', 
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 5, // Limits the captiin to show  5 lines.
    WebkitBoxOrient: 'vertical',
    marginBottom: 0,
  },
};

const InstagramBlogs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=IGQWRNNDduRi1TT2J1VE1fOUlaUUdJUnc3TEc4cUdhRVFwOGRVRVF3WUZAoVlJVeFBZARFF4akRFbFktX2ZAIc0wyMFNzWWpZAc3RBSWIyRFhFR1pDMms1SU54aVR6M2tlclRvb2lKRUVya2tLODdqQlExaERFd2s1QWMZD');
        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  // Function to redirect to Nalaemton's Instagram page
  const redirectToInstagram = () => {
    window.open('https://www.instagram.com/nalaemton/', '_blank');
  };

  return (
    <div style={styles.ibContainer}>
      <div style={styles.ibCardsContainer}>
        {posts.map(post => (
          <div key={post.id} style={styles.ibCard} onClick={redirectToInstagram}>
            <img src={post.media_url} alt="Post" style={styles.ibCardImage} />
            <h2 style={{ ...styles.ibCaption, textAlign: 'left' }}>
              {post.caption}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramBlogs;
