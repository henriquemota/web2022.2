import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom"

import Layout from './layout'
import CEP from './pages/cep'
import Home from './pages/home'
import { Post, PostList } from './pages/posts'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Navigate to="/home" replace />} />
          <Route path='home' element={<Home />} />
          <Route path="cep" element={<CEP />} />
          <Route path="posts" element={<PostList />}>
            <Route path=":id" element={<Post />} />
            <Route path="new" element={<Post />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)