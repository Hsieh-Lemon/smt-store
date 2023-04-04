import 'antd/dist/reset.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Artist from './pages/Artist'
import About from './pages/About'
import { HelmetProvider } from 'react-helmet-async'
import { ConfigProvider } from 'antd'
import { darkTheme, lightTheme } from './theme';

function App() {
  return (
    <ConfigProvider theme={lightTheme} >
      <HelmetProvider context={{}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="artist" element={<Artist />} >
              <Route path="category/:categoryName" element={<Artist />} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="shop" element={<Home />} />

          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </ConfigProvider>
  )
}

export default App
