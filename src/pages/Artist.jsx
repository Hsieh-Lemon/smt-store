import Footer from "../components/Footer";
import Header from "../components/Header";
import ArtistTop from "../components/ArtistTop";
import { Helmet } from "react-helmet-async"

function Artist(){
    return(
        <div className="mainLayout">
            <Helmet><title>ARTIST</title></Helmet>
            <Header className="layoutHeader" />
            <div className="layoutContent" >
                <ArtistTop/>
            </div>
            <Footer className="layoutFooter" />
        </div>
        
    )
}

export default Artist;