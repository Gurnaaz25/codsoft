import React from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BlogPost = ({ post, onDelete }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {post.title}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {new Date(post.date).toLocaleDateString()}
        </Typography>
        <Typography variant="body2" component="p">
          {post.content.substring(0, 200)}...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate(`/edit/${post.id}`)}>
          Edit
        </Button>
        <Button size="small" color="error" onClick={() => onDelete(post.id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default BlogPost;
