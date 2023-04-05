import Footer from "../components/Footer";
import Header from "../components/Header";
import { Helmet } from "react-helmet-async"

function About() {
    return (
        <div className="mainLayout">
            <Helmet><title>ABOUT</title></Helmet>
            <Header className="layoutHeader" />
            <div className="layoutContent" >
                <div className="boss_img">
                    <img src="images/sm_boss.jpg"/>
                    <h1>Pay To Unlock</h1>
                </div>
            </div>
            <Footer className="layoutFooter" />
        </div>

    )
}

export default About;