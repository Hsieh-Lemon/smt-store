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
  const [count, setCount] = useState(0)

  return (
    <ConfigProvider theme={lightTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="products">
                <Route path="category/:categoryName" element={<Shop />} />
                <Route path="id/:productId" element={<Product />} />
          </Route>
          <Route path="products">
            <Route path="id/:productId" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>

    // <div className="App">
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </div>
  )
}

export default App
