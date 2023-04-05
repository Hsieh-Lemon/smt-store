import Nav2Link from '../Nav2Link';
import styles from './navbar2.module.css';
import { RightOutlined } from '@ant-design/icons';

export default function NavBar() {

    const NavBar2Content = () => (
        <>
            <Nav2Link to="/products/category/album"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                ALBUM
            </Nav2Link>
            <Nav2Link to="/products/category/photobook"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                PHOTOBOOK
            </Nav2Link>
            <Nav2Link to="/products/category/concert"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                CONCERT
            </Nav2Link>
            <Nav2Link to="/products/category/fashion"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                FASHION
            </Nav2Link>
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