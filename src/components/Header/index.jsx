import styles from "./header.module.css";
import NavBar from "../NavBar";
import { useState } from "react";
import { Link } from "react-router-dom"

export default function Header() {
    const [isOnTouch, setIsOnTouch] = useState(false);
    return (
        <div>
            <div className={styles.header}>
                <Link to="/">
                    <img className={styles.logo} src="/images/LOGO2.png" alt="logo" />
                </Link>
                <NavBar open={isOnTouch} onClose={() => setIsOnTouch(false)} />
                <div className={styles.IconArea}>
                    <a href="#">
                        <img className={styles.icon} src="/images/LOGIN.png" alt="login" />
                    </a>
                    <a href="#">
                        <img className={styles.icon} src="/images/BAG.png" alt="bag" />
                    </a>
                </div>

            </div>
            <div className={styles.placeholder}></div>
        </div>
    )
}
