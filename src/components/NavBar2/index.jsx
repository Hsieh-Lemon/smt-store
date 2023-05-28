import { Button } from "antd"
import NavLink from '../MotionNavLink';
import styles from './navbar2.module.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { motion } from "framer-motion";

export default function NavBar2() {
    const [selected, setSelected] = useState(0);

    const NavBar2Content = (props) => (
        <motion.ul {...props} style={{ listStyleType: 'none' }}>
            <NavLink
                to="/products/category/album"
                onClick={() => setSelected(0)}
                id={0}
                selected={selected}
            >
                ALBUM
            </NavLink>
            <NavLink
                to="/products/category/photobook"
                onClick={() => setSelected(1)}
                id={1}
                selected={selected}
            >
                PHOTOBOOK
            </NavLink>
            <NavLink
                to="/products/category/concert"
                onClick={() => setSelected(2)}
                id={2}
                selected={selected}
            >
                CONCERT
            </NavLink>
            <NavLink
                to="/products/category/fashion"
                onClick={() => setSelected(3)}
                id={3}
                selected={selected}
            >
                FASHION
            </NavLink>
            <NavLink
                to="/products/category/exclusive"
                onClick={() => setSelected(4)}
                id={4}
                selected={selected}
            >
                EXCLUSIVE
            </NavLink>

        </motion.ul>
    )

    return (
        <motion.div>
            <motion.div>
                <NavBar2Content className={styles.navBar} />
            </motion.div>
        </motion.div>

    );
}