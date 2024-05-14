import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import 'react-photo-view/dist/react-photo-view.css';

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from './pages/Home.tsx';
import Gallery from './pages/Gallery.tsx';
import Blog from './pages/Blog.tsx';
import BlogPage from './pages/BlogPage.tsx';
import Contact from './pages/Contact.tsx';
import ErrorElement from './pages/Error.tsx';

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<ErrorElement />}>
      <Route errorElement={<ErrorElement />} />
      <Route index element={<Home />} />
      <Route path='blogs' element={<Blog />} />
      <Route path='blog/:blog' element={<BlogPage />} />
      <Route path='gallery' element={<Gallery />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
