import { Empty } from 'antd';
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Helmet } from "react-helmet-async"

function About() {
    return (
        <div className="mainLayout">
            <Helmet><title>ABOUT</title></Helmet>
            <Header className="layoutHeader" />
            <div className="layoutContent" >
                <Empty/>
            </div>
            <Footer className="layoutFooter" />
        </div>

    )
}

export default About;