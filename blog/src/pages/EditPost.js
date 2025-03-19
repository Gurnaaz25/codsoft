import React from 'react';
import { Container, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import BlogForm from '../components/BlogForm';

const EditPost = ({ posts, onSave }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  const handleSubmit = (updatedPost) => {
    onSave(updatedPost);
    navigate('/');
  };

  if (!post) {
    return (
      <Container maxWidth="md">
        <Typography variant="h4" sx={{ my: 4 }}>Post not found</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h4" sx={{ my: 4 }}>Edit Post</Typography>
      <BlogForm post={post} onSubmit={handleSubmit} />
    </Container>
  );
};

export default EditPost;
