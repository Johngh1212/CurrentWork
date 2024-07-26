// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
// import './App.css';
// import HomePage from './components/HomePage';
// import CreateAccount from './components/CreateAccount';
// import Login from './components/Login';


// function App() {
//   return (
//     <div>
//       <header>
//         <h1>Balanced Bytes</h1>
//         <nav>
//           <Link to="/">Home</Link> | <Link to="/create-account">Create Account</Link> | <Link to="/login">Login</Link>
//         </nav>
//       </header>
//       <main>
//         <Outlet />
//       </main>
//     </div>
//   );
// }
//
// export default App;

import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <AppBar position="fixed" className="app-bar">
        <Toolbar className="toolbar">
          <Typography variant="h5" className="title"> {/* Updated variant and added class */}
            Balanced Bytes
          </Typography>
          <div className="button-group">
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/create-account">
              Create Account
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;






// import React from 'react';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Header from './components/Header';
// import MainFeaturedPost from './components/MainFeaturedPost';
// import FeaturedPost from './components/FeaturedPost';
// import './App.css';
//
// //import Main from './components/Main'; // Ensure this path is correct
//
// const theme = createTheme();
//
// const sections = [
//   { title: 'Section 1', url: '#' },
//   { title: 'Section 2', url: '#' },
//   // Add more sections as needed
// ];
//
// const mainFeaturedPost = {
//   title: 'Main Featured Post',
//   description: 'Description of the main featured post.',
//   image: 'https://source.unsplash.com/random',
//   imageText: 'Main image description',
//   linkText: 'Continue reading…',
// };
//
// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Header title="Balynced Bytes" sections={sections} />
//       <MainFeaturedPost post={mainFeaturedPost} />
//       {/* Other components */}
//     </ThemeProvider>
//   );
// }
//
// export default App;






