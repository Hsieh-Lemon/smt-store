import styles from "./header.module.css";

export default function Header(){
    return(
        <div className={styles.header}>
            <img className={styles.logo} src="/images/LOGO2.png" alt="logo" />
        </div>
    )
}
