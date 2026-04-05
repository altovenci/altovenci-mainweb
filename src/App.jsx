import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Service from './pages/service'
import Home from './pages/home'
import Portfolio from './pages/portfolio'
import Gallery from './pages/gallery'
import RootLayout from './layouts/RootLayout'
import ServiceLayout from './layouts/ServiceLayout'
import BlogLayout from './layouts/BlogLayout'
import NotFound from './pages/notFound'


const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route Path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='service' element={<ServiceLayout />} >
      </Route>
      <Route path='portfolio' element={<PortfolioLayout />} >
      </Route>
      <Route path='blog' element={<BlogLayout />}>
      </Route>
      <Route path='gallery' element={<Gallery />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  ))
  return (
    <RouterProvider router={router} />
  )
}

export default App