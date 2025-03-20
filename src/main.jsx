import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx'
import Contact from './Components/Contact/Contact.jsx'
import About from './Components/About/About.jsx'
import ShowProdata from './Components/Products/ShowProdata.jsx'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import CategoryProduct from './Components/Products/CategoryProduct.jsx'
import AllProducts from './Components/Products/AllProducts.jsx'
import SignupLogin from './Components/Registeration/SignUp.jsx'
import AddToCart from './Components/Cards/AddToCart.jsx'
import WishlistCard from './Components/Cards/WishlistCard.jsx'
import CheckOut from './Components/Cart&buy/CheckOut.jsx'
import Errored from './Components/Errored.jsx'
import QuickView from './Components/Cards/QuickView.jsx'
import Profile from './Components/Registeration/Profile.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='' element={<Home />} />
      <Route path='contact' element={<Contact />} />
      <Route path='about' element={<About />} />
      <Route path="/:slug/:id" element={<ShowProdata />} />
      <Route path="/:slug" element={<CategoryProduct />} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/signup" element={<SignupLogin />} />
      <Route path="/addtocart" element={<AddToCart />} />
      <Route path="/wishlist" element={<WishlistCard />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="*" element={<Errored />} />
      <Route path="/profile" element={<Profile />} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
