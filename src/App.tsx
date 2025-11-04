import { useState } from "react";

import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Earphones from "./pages/Earphones";
import Speakers from "./pages/Speakers";
import Checkout from "./pages/Checkout";
import ProductDetail from "./components/ProductRy";
import Productpage from "./pages/Productpage";
import img1 from './assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg'
import img2 from './assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg'
import iiimg from './assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg'

const itemarray =[{id: "1x",test:'HeadPhone unit'},{id: "2x",test:'Replacement earcup'},
  {id: "1x",test:'User Manual'},
  {id: "1x",test:'1.5mm 5mm Audio Cable'},
  {id: "1x",test:'Travel Cup'},
]

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "headphones", element: <Headphones /> },
      { path: "earphones", element: <Earphones /> },
      { path: "speakers", element: <Speakers /> },
      {
        path: "product/ii",
        element: (
          <Productpage
            prodname="XX9 MARK II HEADPHONES"
            proddesc="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
            price="$ 2,599"
            p1="Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.

"
            p2="The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic."
            box={itemarray}
            img1={img1}
            img2={img2}
            bigimg={iiimg}
          />
        ),
      },
      {
        path: "product/i",
        element: (
          <Productpage
            prodname=""
            proddesc=""
            price=""
            p1=""
            p2=""
            box=""
            img1=""
            img2=""
            bigimg=""
          />
        ),
      },
      {
        path: "product/x9",
        element: (
          <Productpage
            prodname=""
            proddesc=""
            price=""
            p1=""
            p2=""
            box=""
            img1=""
            img2=""
            bigimg=""
          />
        ),
      },
      {
        path: "product/x7",
        element: (
          <Productpage
            prodname=""
            proddesc=""
            price=""
            p1=""
            p2=""
            box=""
            img1=""
            img2=""
            bigimg=""
          />
        ),
      },
      {
        path: "product/1",
        element: (
          <Productpage
            prodname=""
            proddesc=""
            price=""
            p1=""
            p2=""
            box=""
            img1=""
            img2=""
            bigimg=""
          />
        ),
      },
    ],
  },
  { path: "checkout", element: <Checkout /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
