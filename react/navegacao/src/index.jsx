import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import Layout from './layout'
import CEP from './pages/cep'
import Home from './pages/home'
import { Post, PostForm, PostList } from './pages/posts'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Navigate to="/home" />} />
          <Route path='home' index element={<Home />} />
          <Route path="cep" element={<CEP />} />
          <Route path="posts" >
            <Route path="" element={<PostList />} />
            <Route path=":id" element={<Post />} />
            <Route path="new" index element={<PostForm />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)