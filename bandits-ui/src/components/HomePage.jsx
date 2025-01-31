// src/components/HomePage.jsx
// import React from 'react';
// import { Container, Typography, Button, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const HomePage = () => {
//     const navigate = useNavigate();
//
//     const handleCreateAccount = () => {
//         navigate('/create-account');
//     };
//
//     const handleLogin = () => {
//         navigate('/login');
//     };
//
//     return (
//         <Container>
//             <Typography variant="h2">Welcome to the Homepage!</Typography>
//             <Typography variant="body1">
//                 This is a simple homepage built with React and Material-UI.
//             </Typography>
//             <Box mt={2}>
//                 <Button variant="contained" color="primary" onClick={handleCreateAccount}>
//                     Create Account
//                 </Button>
//                 <Button variant="contained" color="secondary" onClick={handleLogin} style={{ marginLeft: '1rem' }}>
//                     Login
//                 </Button>
//             </Box>
//         </Container>
//     );
// };
//
// export default HomePage;



import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/create-account');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <Container className="home-container">
      <Box className="home-content">
        <Typography variant="h4">Welcome to Balynced Bytes!</Typography>
{/*         <Typography variant="body1" paragraph> */}
{/*           This is a simple homepage built with React and Material-UI. */}
{/*         </Typography> */}
        <Box display="flex" gap={2}>
{/*           <Button variant="contained" color="primary" onClick={handleCreateAccount}> */}
{/*             Create Account */}
{/*           </Button> */}
{/*           <Button variant="contained" color="secondary" onClick={handleLogin}> */}
{/*             Login */}
{/*           </Button> */}
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;



// import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import Container from '@mui/material/Container';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import XIcon from '@mui/icons-material/X';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Header from './Header';
// import MainFeaturedPost from './MainFeaturedPost';
// import FeaturedPost from './FeaturedPost';
// import Main from './main'; // Ensure this path is correct
// import Sidebar from './Sidebar';
// import Footer from './Footer';
// import post1 from './blog-post.1.md';
// import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';
//
// const sections = [
//   { title: 'Technology', url: '#' },
//   { title: 'Design', url: '#' },
//   { title: 'Culture', url: '#' },
//   { title: 'Business', url: '#' },
//   { title: 'Politics', url: '#' },
//   { title: 'Opinion', url: '#' },
//   { title: 'Science', url: '#' },
//   { title: 'Health', url: '#' },
//   { title: 'Style', url: '#' },
//   { title: 'Travel', url: '#' },
// ];
//
// const mainFeaturedPost = {
//   title: 'Title of a longer featured blog post',
//   description:
//     "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
//   image: 'https://source.unsplash.com/random?wallpapers',
//   imageText: 'main image description',
//   linkText: 'Continue reading…',
// };
//
// const featuredPosts = [
//   {
//     title: 'Featured post',
//     date: 'Nov 12',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random?wallpapers',
//     imageLabel: 'Image Text',
//   },
//   {
//     title: 'Post title',
//     date: 'Nov 11',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random?wallpapers',
//     imageLabel: 'Image Text',
//   },
// ];
//
// const posts = [post1, post2, post3];
//
// const sidebar = {
//   title: 'About',
//   description:
//     'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
//   archives: [
//     { title: 'March 2020', url: '#' },
//     { title: 'February 2020', url: '#' },
//     { title: 'January 2020', url: '#' },
//     { title: 'November 1999', url: '#' },
//     { title: 'October 1999', url: '#' },
//     { title: 'September 1999', url: '#' },
//     { title: 'August 1999', url: '#' },
//     { title: 'July 1999', url: '#' },
//     { title: 'June 1999', url: '#' },
//     { title: 'May 1999', url: '#' },
//     { title: 'April 1999', url: '#' },
//   ],
//   social: [
//     { name: 'GitHub', icon: GitHubIcon },
//     { name: 'X', icon: XIcon },
//     { name: 'Facebook', icon: FacebookIcon },
//   ],
// };
//
// // TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();
//
// export default function HomePage() {
//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <CssBaseline />
//       <Container maxWidth="lg">
//         <Header title="HomePage" sections={sections} />
//         <main>
//           <MainFeaturedPost post={mainFeaturedPost} />
//           <Grid container spacing={4}>
//             {featuredPosts.map((post) => (
//               <FeaturedPost key={post.title} post={post} />
//             ))}
//           </Grid>
//           <Grid container spacing={5} sx={{ mt: 3 }}>
//             <main title="From the firehose" posts={posts} />
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


// import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import Container from '@mui/material/Container';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import XIcon from '@mui/icons-material/X';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Header from './Header';
// import MainFeaturedPost from './MainFeaturedPost';
// import FeaturedPost from './FeaturedPost';
// import Main from './Main'; // Update to match the filename
// import Sidebar from './Sidebar';
// import Footer from './Footer';
//
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
// export default function HomePage() {
//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <CssBaseline />
//       <Container maxWidth="lg">
//         <Header title="HomePage" sections={sections} />
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
