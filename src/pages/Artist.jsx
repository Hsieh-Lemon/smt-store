import Footer from "../components/Footer";
import Header from "../components/Header";
import ArtistTop from "../components/ArtistTop";
import { Helmet } from "react-helmet-async"
import Gallery from "../components/Gallery";
import artists from "../json/artist.json"
import Search from "../components/Search";
import ArtistSelect from "../components/ArtistSelect";
import { useParams } from 'react-router-dom';

function Artist(){
    const { artcategoryName } = useParams();
    const _artists = !artcategoryName
    ? artists
    : artists.filter(
        x => x?.category.toUpperCase() === artcategoryName.toUpperCase()
      );

    return(
        <div className="mainLayout">
            <Helmet><title>ARTIST</title></Helmet>
            <Header className="layoutHeader" />
            <div className="layoutContent" >
                <ArtistTop/>
                <Search/>
                <ArtistSelect/>
                <Gallery artist={_artists}/>
            </div>
            <Footer className="layoutFooter" />
        </div>
        
    )
}

export default Artist;