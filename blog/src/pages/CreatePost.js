import React from 'react';
import { Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BlogForm from '../components/BlogForm';

const CreatePost = ({ onSave }) => {
  const navigate = useNavigate();

  const handleSubmit = (post) => {
    onSave(post);
    navigate('/');
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" sx={{ my: 4 }}>Create New Post</Typography>
      <BlogForm onSubmit={handleSubmit} />
    </Container>
  );
};

export default CreatePost;
