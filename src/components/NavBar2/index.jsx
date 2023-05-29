import { Button, Carousel } from "antd"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

import { useState } from "react";
import NavLink from '../NavLink';
import styles from './navbar2.module.css';
import {FaAngleLeft,FaAngleRight} from 'react-icons/fa';

export default function NavBar2() {
    
    const CustomPrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div className={styles.left} style={{ ...style }} onClick={onClick}>
            <FaAngleLeft />
          </div>
        );
      };
    
      const CustomNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div className={styles.right} style={{ ...style }} onClick={onClick}>
            <FaAngleRight/>
          </div>
        );
      };
    const settings = {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
                
            }
        ],
    };
    

    return (
        
            <div className={styles.navBar2}>
                {/* <Button onClick={handlePrev} disabled={activeIndex === 0} type="text">
                    <LeftOutlined style={{ color: "#434868", height: "2em" }} />
                </Button> */}
               
                <Slider {...settings} className={styles.content} >

                    <NavLink to="/products/category/album" 
                        className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                        <p>ALBUM</p>
                    </NavLink>

                    <NavLink to="/products/category/photobook"
                        className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                        <p>PHOTOBOOK</p>
                    </NavLink>
                    <NavLink to="/products/category/concert"
                        className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                        <p>CONCERT</p>
                    </NavLink>
                    <NavLink to="/products/category/fashion"
                        className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                        <p>FASHION</p>
                    </NavLink>
                    <NavLink to="/products/category/exclusive"
                        className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                        <p>EXCLUSIVE</p>
                    </NavLink>

                    {/* <section className={styles.content} >
                        <NavBar2Content />
                    </section> */}

                </Slider>
                {/* <Button onClick={handleNext} disabled={activeIndex === 4} type="text">
                    <RightOutlined style={{ color: "#434868", height: "2em" }} />
                </Button> */}
            </div>

        

    );
}