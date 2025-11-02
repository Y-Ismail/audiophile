import { useState } from 'react'

import './App.css'
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Header from './components/Header';
import { createBrowserRouter , RouterProvider} from 'react-router';
import Root from './pages/Root';
import Home from './pages/Home';
import Headphones from './pages/Headphones';
import Earphones from './pages/Earphones';
import Speakers from './pages/Speakers';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {index: true, element: <Home />},
      {path:'headphones', element:<Headphones />},
      {path:'earphones', element: <Earphones />},
      {path:'speakers', element: <Speakers />}
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/> 
    </>
  )
}

export default App;
