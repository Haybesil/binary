import React from 'react'
import Home from './pages/home/Home'
import ScrollBtn from './components/scrollBtn/ScrollBtn'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './components/authentication/SignUp'
import SignIn from './components/authentication/SignIn'
import BuyCryptoSection from './pages/buyCrypto/BuyCrypto'

const router = createBrowserRouter([
  {
    path: '/',
    exact: true,
    element: <Home/>,
  },

  {
    path: '/signup',
    element: <SignUp/>,
  },
  {
    path: '/signin',
    element: <SignIn/>,
  },
  {
    path: '/buycrypto',
    element: <BuyCryptoSection/>,
  },

])

const App = () => {
  return (
    <div className=''>
      <div className='btnbounce fixed bottom-6 right-12'>
      <ScrollBtn />
      </div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App 