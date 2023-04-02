import styles from "./news.module.css";

export default function News(){
    return(
        <div className={styles.layout}>
            <h1 className={styles.title}>NEWS</h1>
            <div className={styles.newsArea}>
                <div className={styles.newsContent}>
                    <p className={styles.newsWord}>Into The New World(Orchestra Ver.)</p>
                    <p className={styles.newsWord}>Recruiting transfer students</p>
                    <p className={styles.newsWord}>ambassador for 'Beautiful Mind'</p>
                    <p className={styles.newsWord}>TAEYEON - ELLE Taiwan Magazine</p>
                    <p className={styles.more}>More...</p>
                </div>
                <img className={styles.newsPic} src="/images/intothenewworld.jpg" alt="news1" />
            </div>
        </div>
    )
}
