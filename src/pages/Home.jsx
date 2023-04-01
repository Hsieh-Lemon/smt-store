import ContentList from "../components/ContentList";
import Footer from "../components/Footer";

function Home(){
    return(
        <div className="mainLayout">
            <div className="layoutHeader"><h1>header</h1></div>
            <ContentList className="layoutContent" />
            <Footer className="layoutFooter" />
        </div>
    )
}

export default Home;