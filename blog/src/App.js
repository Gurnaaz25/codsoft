import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';

const theme = createTheme();

function App() {
  const [posts, setPosts] = useState([]);

  const handleSave = (post) => {
    const existingPostIndex = posts.findIndex(p => p.id === post.id);
    if (existingPostIndex >= 0) {
      const updatedPosts = [...posts];
      updatedPosts[existingPostIndex] = post;
      setPosts(updatedPosts);
    } else {
      setPosts([...posts, post]);
    }
  };

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home posts={posts} onDelete={handleDelete} />} />
          <Route path="/create" element={<CreatePost onSave={handleSave} />} />
          <Route path="/edit/:id" element={<EditPost posts={posts} onSave={handleSave} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
