import 'antd/dist/reset.css';
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ConfigProvider } from 'antd';

import { lightTheme, darkTheme } from './theme';
import Shop from './pages/Shop'
import Product from './pages/Product';
import './App.css'

function App() {
  
  return (
    <ConfigProvider theme={lightTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shop />} />
          
          <Route path="products">            
                <Route path="category/:categoryName" element={<Shop />} />
                <Route path="author/:categoryName" element={<Shop />} />
                <Route path="id/:productId" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>

  )
}

export default App
