import styles from "./artistselect.module.css";
import { NavLink } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
    {
        label: <NavLink to="/artist"
            className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
            ALL
        </NavLink>,
        key: '0',
    },
    {
        label: <NavLink to="/artist/category/solo"
            className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
            SOLO
        </NavLink>,
        key: '1',
    },
    {
        label: <NavLink to="/artist/category/boys-team"
            className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
            BOYS TEAM
        </NavLink>,
        key: '3',
    },
    {
        label: <NavLink to="/artist/category/girls-team"
            className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
            GIRLS TEAM
        </NavLink>,
        key: '4',
    },
    {
        label: <NavLink to="/artist"
            className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
            A to Z
        </NavLink>,
        key: '4',
    },
];

export default function ArtistSelect() {
    return (

        <div className={styles.click}>
            <Dropdown
                menu={{
                    items,
                }}
                trigger={['click']}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        Category
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
        </div>

    )
}
