import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BlogPost from '../components/BlogPost';

const Home = ({ posts, onDelete }) => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4">Blog Posts</Typography>
          <Button variant="contained" onClick={() => navigate('/create')}>
            Create New Post
          </Button>
        </Box>
        {posts.length === 0 ? (
          <Typography variant="body1">No posts yet. Create your first post!</Typography>
        ) : (
          posts.map(post => (
            <BlogPost key={post.id} post={post} onDelete={onDelete} />
          ))
        )}
      </Box>
    </Container>
  );
};

export default Home;
