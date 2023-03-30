import Header from "../components/Header"
import Footer from "../components/Footer"

function Home(){
    return(
        <div className="mainLayout">
            <div className="layoutHeader"><h1>header</h1></div>
            <div className="layoutContent"><h1>content</h1></div>
            <div className="layoutFooter"><h1>footer</h1></div>
        </div>
    )
}

export default Home;