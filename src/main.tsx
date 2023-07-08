import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./index.css"

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Speciality from './pages/Speciality.tsx'
import Updates from './pages/Updates.tsx'
import Contact from './pages/Contact.tsx'
import ErrorElement from './pages/Error.tsx'
import Post from './pages/Post.tsx'

import PostLoader from './loaderFunctions/PostLoader.ts'

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} errorElement={<ErrorElement/>}>
      <Route errorElement={<ErrorElement/>}/>
      <Route index element={<Home/>}/>
      <Route path="ortho/:name" loader={PostLoader} element={<Post/>}/>
      <Route path="gynae/:name" loader={PostLoader} element={<Post/>}/>
      <Route path="facilities/:name" loader={PostLoader} element={<Post/>}/>
      <Route path="infra/:name" loader={PostLoader} element={<Post/>}/>
      <Route path='speciality' element={<Speciality/>}/>
      <Route path='updates' element={<Updates/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
