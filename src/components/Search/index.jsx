import styles from "./search.module.css";


export default function Search() {
    return (
        <div className={styles.searchArea}>
            <input className={styles.search} type="text" name="search" />
            <hr className={styles.hrSearchLine} />
            <a href="#" >
                <img className={styles.searchImg} src="/images/search.png" />
            </a>
        </div>

    )
}