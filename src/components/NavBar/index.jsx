import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

export default function NavBar() {
    return (
        <div className={styles.navBar}>
            <NavLink to="/NavBar/artist"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                Artist
            </NavLink>
            <NavLink to="/"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                About
            </NavLink>
            <NavLink to="/"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                shop
            </NavLink>
        </div>
    );
}