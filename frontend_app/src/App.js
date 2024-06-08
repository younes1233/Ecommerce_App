import React , { useEffect } from 'react';
import {BrowserRouter, Routes, Route, useHistory} from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import Home from './pages/Store/Home';
import {Navbar, Footer, Sidebar, ThemeSettings } from './components';
import {AdminLogin,Products, Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Line, Financial, ColorPicker, ColorMapping, Editor} from './pages';
import {useStateContext } from './contexts/ContextProvider';
import ProductDetail from './pages/Store/ProductDetail/ProductDetail';
import Cart from './pages/Store/Cart';
import './App.css';
import NotFoundPage from './pages/NotFoundPage';
import ProfilePage from './pages/Store/ProfilePage';
// import ProtectedRoute from './ProtectedRoute';
import ProtectedRoutes from './components/utiles/ProtectedRoutes';
import Checkout from './pages/Store/Checkout';
import SideCart from './components/Store/SideCart';

const App = () => {
  const {items, setItems} = useStateContext();

  return(
    <>
       <BrowserRouter>
          <Routes>
          <Route element={<ProtectedRoutes />}>
          <Route path="/admin/*" element={<AdminProtectedRoutes />} />
          </Route>
       
        <Route path="/lb-admin" element={<AdminLogin />} />
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail/>} />
        <Route path="/user/profile" element={<ProfilePage/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="*" element={<NotFoundPage />} /> 
        </Routes>
    
    </BrowserRouter>
    </>
  )
}


const AdminProtectedRoutes = () => {
  const {activeMenu, themeSettings, setThemeSettings, currentColor, currentMode} = useStateContext();
  return (
    <div className={currentMode === 'Dark'? 'dark':''}>
        <div className='flex relative  dark:bg-main-dark-bg '>
          <div className= 'fixed right-4 bottom-4' style={{zIndex:1000}}>
            <TooltipComponent 
              content="Settings" 
              position="Top" 
            >
              <button 
                type='button' 
                className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' 
                style={{backgroundColor:currentColor, borderRadius: '50%' }} 
                onClick={() => setThemeSettings(true)}
              > 
                <FiSettings  />
              </button>
            </TooltipComponent>
          </div>

          {/* TO MAKE THE DYNAMIC SIDEBAR */}
            {activeMenu? (
              <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg z-20 bg-white' >
                <Sidebar />
              </div>
            ) : (
              <div className='w-0 dark:bg-secondary-dark-bg'>
                <Sidebar />
              </ div>
            )
          }
        
          {/* Div for Navbar */}
          <div className= {
            `dark:bg-main-dark-bg bg-main-bg w-full min-h-screen 
            ${activeMenu? 
              'ml-72 md:ml-72':
              'flex-2'}`}>
              <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                <Navbar />
              </div>


          {/*Div for Routing */}
          <div >
            {themeSettings && <ThemeSettings />}

            <Routes>
              {/* Dashboard */}
          
              <Route path='/' element={<Ecommerce />} />
              <Route path='/ecommerce' element={<Ecommerce/>} />
              
              {/* Pages */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/products" element={<Products />} />
              <Route path="/admin" element={<AdminLogin />} />


              {/* Apps */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element= {<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />}  />

              {/* Charts */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
              <Route path="/home" element={<Home />} />
              

            </Routes>
          </div>
          </div>
        </div>
     

    </div>
  );
};

export default App