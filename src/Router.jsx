import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Artist from './pages/Artist'
import About from './pages/About'
import { HelmetProvider } from 'react-helmet-async'
import { ConfigProvider } from 'antd'
import { darkTheme, lightTheme } from './theme';
import { selectLightMode } from "./redux/colorSLice";
import { useSelector } from "react-redux";


function Router() {
    const lightMode = useSelector(selectLightMode);
     const theme = lightMode ? lightTheme : darkTheme;
    return (

        <ConfigProvider theme={theme} >
            <HelmetProvider context={{}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="artist" element={<Artist />} >
                            <Route path="artcategory/:artcategoryName" element={<Artist />} />
                        </Route>
                        <Route path="about" element={<About />} />
                        <Route path="shop" element={<Home />} />

                    </Routes>
                </BrowserRouter>
            </HelmetProvider>
        </ConfigProvider>

    )
}

export default Router
