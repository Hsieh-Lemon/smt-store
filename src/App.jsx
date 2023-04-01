import 'antd/dist/reset.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Artist from './pages/Artist'
import { HelmetProvider } from 'react-helmet-async'

function App() {
  return (
    <HelmetProvider context={{}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="NavBar">
            <Route path="artist" element={<Artist />} />
            <Route path="about" element={<Home />} />
            <Route path="shop" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </HelmetProvider>
  )
}

export default App
