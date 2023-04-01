import styles from "./video.module.css";

export default function Video() {
    return (
        <div className={styles.layout}>
            <h1 className={styles.title}>VIDEO</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/zlTIextYnyQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}
