import ContentList from "../components/ContentList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Helmet } from "react-helmet-async"


function Home(){
    return(
        <div className="mainLayout">
            <Helmet><title>SMTOWN&SHOP</title></Helmet>
            <Header className="layoutHeader" />
            <ContentList className="layoutContent" />
            <Footer className="layoutFooter" />
        </div>
    )
}

export default Home;