import styles from "./contentlist.module.css";
import Banner from "../Banner";
import News from "../News";
import Video from "../Video";
import Album from "../Album";

export default function ContentList(){
    return(
        <div>
            
            <News/>
            <Video/>
            <Album/>
        </div>
    )
}
