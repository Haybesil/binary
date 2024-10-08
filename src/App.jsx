import { React, useEffect } from 'react';
import Home from './pages/home/Home';
import ScrollBtn from './components/scrollBtn/ScrollBtn';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './components/authentication/SignUp';
import SignIn from './components/authentication/SignIn';
import BuyCryptoSection from './pages/buyCrypto/BuyCrypto';
import Trade from './pages/trade/Trade';
import Terms from './pages/terms/Terms';
import Policy from './pages/policy/Policy';
import Markets from './pages/markets/Markets';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';
import { AuthProvider } from './components/contexts/authContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PromoCode from './components/PromoCode';
import UserProfile from './components/UserProfile';

const router = createBrowserRouter([
  {
    path: '/',
    exact: true,
    element: <Home />,
    errorElement: <NotFound />,
  },

  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/buycrypto',
    element: <BuyCryptoSection />,
  },

  {
    path: '/trade',
    element: <Trade />,
  },

  {
    path: '/terms',
    element: <Terms />,
  },
  {
    path: '/policy',
    element: <Policy />,
  },
  {
    path: '/markets',
    element: <Markets />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/promocode',
    element: <PromoCode />,
  },
  {
    path: '/profile',
    element: <UserProfile/>,
  },
]);

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <ToastContainer />
      <AuthProvider>
        <div className=" overflow-hidden">
          <div className="btnbounce fixed bottom-6 right-12">
            <ScrollBtn />
          </div>
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
    </>
  );
};

export default App;
