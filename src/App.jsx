import 'antd/dist/reset.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ConfigProvider } from 'antd';
import { Provider } from "react-redux";
import { lightTheme, darkTheme } from './theme';

import Shop from './pages/Shop'
import Product from './pages/Product';
import './App.css'
import { Provider } from "react-redux";
import Router from './Router';
import store from './redux/store';
import store from './redux/store';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  )
}

export default App
