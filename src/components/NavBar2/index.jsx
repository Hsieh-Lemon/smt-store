
import NavLink from '../NavLink';
import styles from './navbar2.module.css';
import { RightOutlined } from '@ant-design/icons';

export default function NavBar2() {

    const NavBar2Content = () => (
        <>
            <NavLink to="/products/category/album"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                ALBUM
            </NavLink>
            <NavLink to="/products/category/photobook"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                PHOTOBOOK
            </NavLink>
            <NavLink to="/products/category/concert"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                CONCERT
            </NavLink>
            <NavLink to="/products/category/fashion"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                FASHION
            </NavLink>
            {/* <Nav2Link to="/products/category/exclusive"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                EXCLUSIVE
            </Nav2Link> */}
                 
        </>
    )

    return (
        <>
            <div className={styles.navBar2}>
                <NavBar2Content />
                <RightOutlined style={{marginLeft:-54}}/>
            </div>
            
        </>

    );
}