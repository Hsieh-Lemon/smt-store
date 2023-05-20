import Footer from "../components/Footer";
import Header from "../components/Header";
import { Helmet } from "react-helmet-async"
import { theme } from 'antd';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function ScrollToTopOnMount() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function About() {
    const {
        token: { colorBg },
    } = theme.useToken();
    return (
        <div className="mainLayout">
            <ScrollToTopOnMount />
            <Helmet>
                <title>ABOUT</title>
                <style>{`
            body { background-color: ${colorBg}; }
        `}</style>
            </Helmet>
            <Header className="layoutHeader" />
            <div className="layoutContent" >
                <div className="boss_img">
                    <img src="images/sm_boss.jpg" />
                    <h1>Pay To Unlock</h1>
                </div>
            </div>
            <Footer className="layoutFooter" />
        </div>

    )
}

export default About;