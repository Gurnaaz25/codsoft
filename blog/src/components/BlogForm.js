import React, { useState } from 'react';
import { TextField, Button, Box, Paper } from '@mui/material';

const BlogForm = ({ post, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: post?.title || '',
    content: post?.content || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      date: post?.date || new Date().toISOString(),
      id: post?.id || Date.now().toString()
    });
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Content"
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          margin="normal"
          required
          multiline
          rows={6}
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          {post ? 'Update Post' : 'Create Post'}
        </Button>
      </Box>
    </Paper>
  );
};

export default BlogForm;
