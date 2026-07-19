 import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, Navigate, BrowserRouter} from 'react-router'

// Component imports
import Header from './components/Header';
import LeftNav from './components/LeftNav';
import RightNav from './components/RightNav';

// Page view component imports
import Dashboard from './pages/Dashboard';
import Newsfeed from './pages/Newsfeed';
import Messages from './pages/Messages';
import Settings from './pages/Settings';

// Importing images
import AvatarIcon from '../src/image/profile.jpeg';
import AdImage from '../src/image/backpiece.jpeg'


// Pure CSS-in-JS Styling (Diablo IV Sanctuary Aesthetic)
const styles = {
  layoutGrid: {
    display: 'grid',
    gridTemplateColumns: '250px 1fr 300px',
    gap: '24px',
    padding: '24px',
    backgroundColor: '#0a0a0b',
    minHeight: '100vh',
    fontFamily: ' "Cinzel", "Georgia", "Times New Roman", serif '
  },
  sidebarContainer: {
    backgroundColor: '#111113', 
    padding: '16px',
    borderRadius: '4px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.95), inset 0 0 10px rgba(74,13,13,0.15)',
    border: '1px solid #331010', 
    height: 'fit-content'
  },
  mainContent: {
    backgroundColor: '#111113', 
    padding: '24px',
    borderRadius: '4px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.95), inset 0 0 10px rgba(74,13,13,0.15)',
    border: '1px solid #331010' 
  },
  navigationBar: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    padding: '12px 32px',
    backgroundColor: '#08080a', 
    borderBottom: '2px solid #4a0d0d',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.9)'
  },
  navLink: {
    color: '#bfa17a',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '14px',
    letterSpacing: '1.5px',
    textTransform: 'uppercase', 
    transition: 'color 0.3s ease'
  },
  avatarLinkWrapper: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center'
  },
  avatarImage: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    border: '2px solid #ff0033',
    cursor: 'pointer',
    boxShadow: '0 0 8px #800c0c'
  }
};

// Mock data Arrays
const NAV_LINKS = [
  { name: 'Dashboard', href: '/Dashboard'},
  { name: 'Newsfeed', href: '/Newsfeed' },
  { name: 'Messages', href: '/Messages' },
  { name: 'Settings', href: '/Settings' },
];


const AD_DATA = [
  { id: 'ad1', 
    src: AdImage, 
    title: 'Future Back Piece', 
    subtitle: 'Lithia and an Angel'
  }
];

function App() {
  // State conversion to React hooks
  const [themeColor, setThemeColor] = useState('#73604c');
  const [editingPostId, setEditingPostId] = useState(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState ([
    { id: 'post1',
      avatar: AvatarIcon,
      title: 'The Future of Web Development',
      content: 'Web development is constantly evolving. In this article, we explore the latest trends and technologies shaping the future of web development.'
    },
    {
      id: 'post2',
      avatar: AvatarIcon,
      title: 'Understanding React Hooks',
      content: 'React Hooks have revolutionized the way we write React components. This article provides a comprehensive guide to understanding and using React Hooks effectively.'
    }
  ]);

  // Lifecycle conversion to useEffect hook
  useEffect(() => {
    const colorTimeout = setTimeout(() => {
      setThemeColor('#ff0033');
    }, 3000);

    return () => clearTimeout(colorTimeout);
  }, []);

  // Create / Update Unified submission function
  const handleFormSubmit = (title, content) => {
    if (editingPostId) {
      setPosts((prevPosts) =>
        prevPosts.map((post) => 
          post.id === editingPostId ? {...post, title, content} :post
    )); setEditingPostId(null);
    } else {
      const newPost = {
        id: `post_${Date.now()}`,
        avatar: AvatarIcon,
        title,
        content,
      };
      setPosts((prevPosts) => [newPost, ...prevPosts]);
    }
  };
  // Delete function
  const handleDeletePost = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    if (editingPostId === postId) {
      setEditingPostId(null);
    }
  };

  const handleEditPost = (id) => {
    setEditingPostId(id);
  };

  //Find currently active post for editing
  const currentEditingPost = posts.find((post) => post.id === editingPostId);

  const filteredPosts = posts.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.content.toLowerCase().includes(searchQuery.toLowerCase())
)


  return (
    <>
      <BrowserRouter>
      {/* Global Header */}
      <Header 
          logoText="xDravynx's Underworld"
          searchPlaceholder="Search..."
          avatarUrl={AvatarIcon} />

      {/* Global Nav Menu */}
      <nav style={styles.navigationBar}>
        <Link to="/Dashboard" style={styles.navLink}>Dashboard</Link>
        <Link to="/Newsfeed" style={styles.navLink}>Newsfeed</Link>
        <Link to="/Messages" style={styles.navLink}>Messages</Link>
        <Link to="/Settings" style={styles.navLink}>Settings</Link>

        {/* Profile interaction target wrapper */}
        <Link to="/Settings" style={styles.avatarLinkWrapper}>
          <img src={AvatarIcon} alt='User Settings Profile' style={styles.avatarImage} />
        </Link>
      </nav>

      {/* Primary Layout Grid via Inline CSS-in-JS styling */}
      <div style={styles.layoutGrid}>

        {/* Left Side Nav */}
        <div style={styles.sidebarContainer}>
          <LeftNav links={NAV_LINKS} />
        </div>

        {/* Dynamic Main Routing Section */}
        <div style={styles.mainContent}>
          <Routes>
            {/* Base redirections and explict route view targets */}
            <Route path='/' element={<Navigate to="/Dashboard" replace />} />
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/Messages' element={<Messages />} />
            <Route path='/Settings' element={<Settings />} />

            {/* Newsfeed view retains your project's custom interactive post-management logic */}
            <Route
              path='/Newsfeed'
              element={
                <Newsfeed 
                  posts={posts}
                  themeColor={themeColor}
                  currentEditingPost={currentEditingPost}
                  onSubmit={handleFormSubmit}
                  onEdit={handleEditPost}
                  onDelete={handleDeletePost}
                  onCancel={()=> setEditingPostId(null)}
                />
              }
            />
          </Routes>
        </div>

        {/* Right Side Advertisements Panel */}
        <div style={styles.sidebarContainer}>
          <RightNav ads={AD_DATA} sectionTitle="Sponsored Content" />
        </div>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;