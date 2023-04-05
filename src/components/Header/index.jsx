import styles from "./header.module.css";
import NavBar from "../NavBar";
import { useState } from "react";
import { Link } from "react-router-dom"
import HamburgerMenu from "../HamburgerMenu"

export default function Header() {
    const [isOnTouch, setIsOnTouch] = useState(false);

    return (
        <div>
            <div className={styles.header}>
                <HamburgerMenu
                    onClick={() => setIsOnTouch(!isOnTouch)}
                    isOnTouch={isOnTouch}
                />
                <Link to="/">
                    <img className={styles.logo} src="/images/LOGO.svg" alt="logo" />
                </Link>
                <NavBar open={isOnTouch} onClose={() => setIsOnTouch(false)} />
                <div className={styles.IconArea}>
                    <a href="#">
                        <img className={styles.icon} src="/images/LOGIN.svg" alt="login" />
                    </a>
                    <a href="#">
                        <img className={styles.icon} src="/images/BAG.svg" alt="bag" />
                    </a>
                </div>

            </div>
            <div className={styles.placeholder}></div>
        </div>
    )
}