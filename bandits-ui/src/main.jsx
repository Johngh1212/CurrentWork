// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
//
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import App from './App.jsx';
// import HomePage from './components/HomePage';
// import CreateAccount from './components/CreateAccount';
// import Login from './components/Login';
// import './index.css';
//
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/" element={<App />}>
//           <Route index element={<HomePage />} />
//           <Route path="create-account" element={<CreateAccount />} />
//           <Route path="login" element={<Login />} />
//         </Route>
//       </Routes>
//     </Router>
//   </React.StrictMode>,
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import HomePage from './components/HomePage';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="create-account" element={<CreateAccount />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);


// import * as React from 'react';
// import ReactDOM from 'react-dom';
// import Main from './Main'; // Ensure the path is correct
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import Markdown from './components/Markdown';
//
// function Main(props) {
//   const { posts, title } = props;
//
//   return (
//     <Grid
//       item
//       xs={12}
//       md={8}
//       sx={{
//         '& .markdown': {
//           py: 3,
//         },
//       }}
//     >
//       <Typography variant="h6" gutterBottom>
//         {title}
//       </Typography>
//       <Divider />
//       {posts.map((post, index) => (
//         <Markdown className="markdown" key={index}>
//           {post}
//         </Markdown>
//       ))}
//     </Grid>
//   );
// }
//
// export default Main;


// import * as React from 'react';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import Markdown from './components/Markdown'; // Corrected path
//
//
// export default function Main(props) {
//   const { posts, title } = props;
//
//   return (
//     <Grid
//       item
//       xs={12}
//       md={8}
//       sx={{
//         '& .markdown': {
//           py: 3,
//         },
//       }}
//     >
//       <Typography variant="h6" gutterBottom>
//         {title}
//       </Typography>
//       <Divider />
//       {posts.map((post) => (
//         <Markdown className="markdown" key={post.substring(0, 40)}>
//           {post}
//         </Markdown>
//       ))}
//     </Grid>
//   );
// }


// import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import Container from '@mui/material/Container';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import XIcon from '@mui/icons-material/X';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Header from './components/Header';
// import MainFeaturedPost from './components/MainFeaturedPost';
// import FeaturedPost from './components/FeaturedPost';
// import Sidebar from './components/Sidebar';
// import Footer from './components/Footer';
// import App from './App.jsx';
//
// const sections = [
//   { title: 'Technology', url: '#' },
//   // More sections here...
// ];
//
// const mainFeaturedPost = {
//   title: 'Title of a longer featured blog post',
//   description: 'Description of the main featured post.',
//   image: 'https://source.unsplash.com/random?wallpapers',
//   imageText: 'main image description',
//   linkText: 'Continue reading…',
// };
//
// const featuredPosts = [
//   {
//     title: 'Featured post',
//     date: 'Nov 12',
//     description: 'Description of featured post.',
//     image: 'https://source.unsplash.com/random?wallpapers',
//     imageLabel: 'Image Text',
//   },
//   // More featured posts...
// ];
//
// const posts = [post1, post2, post3];
//
// const sidebar = {
//   title: 'About',
//   description: 'Description of sidebar.',
//   archives: [
//     { title: 'March 2020', url: '#' },
//     // More archives...
//   ],
//   social: [
//     { name: 'GitHub', icon: GitHubIcon },
//     { name: 'X', icon: XIcon },
//     { name: 'Facebook', icon: FacebookIcon },
//   ],
// };
//
// const defaultTheme = createTheme();
//
// export default function Main() {
//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <CssBaseline />
//       <Container maxWidth="lg">
//         <Header title="Balynced Bytes" sections={sections} />
//         <main>
//           <MainFeaturedPost post={mainFeaturedPost} />
//           <Grid container spacing={4}>
//             {featuredPosts.map((post) => (
//               <FeaturedPost key={post.title} post={post} />
//             ))}
//           </Grid>
//           <Grid container spacing={5} sx={{ mt: 3 }}>
//             <Main title="From the firehose" posts={posts} />
//             <Sidebar
//               title={sidebar.title}
//               description={sidebar.description}
//               archives={sidebar.archives}
//               social={sidebar.social}
//             />
//           </Grid>
//         </main>
//       </Container>
//       <Footer
//         title="Footer"
//         description="Something here to give the footer a purpose!"
//       />
//     </ThemeProvider>
//   );
// }