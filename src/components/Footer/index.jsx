import styles from "./footer.module.css";

export default function Footer() {
    return (
        <div>
            <hr className={styles.hrFooterLine} />
            <div className={styles.Footer}>
                <p className={styles.webName}>SMTOWN&STORE</p>
                <div className={styles.IconArea}>
                    <a href="https://www.facebook.com/smtown">
                        <img className={styles.icon} src="/images/FB_icon.png" alt="facebook" />
                    </a>
                    <a href="https://www.instagram.com/smtown/">
                        <img className={styles.icon} src="/images/INS_icon.png" alt="instagram" />
                    </a>
                    <a href="https://twitter.com/SMTOWNGLOBAL">
                        <img className={styles.icon} src="/images/TWITTER_icon.png" alt="twitter" />
                    </a>
                    <a href="https://www.youtube.com/c/SMTOWN">
                        <img className={styles.icon} src="/images/YT_icon.png" alt="youtube" />
                    </a>
                </div>
                <p className={styles.copyRight}>© 2023 SMTOWN&STORE</p>
            </div>
        </div>
    )
}
