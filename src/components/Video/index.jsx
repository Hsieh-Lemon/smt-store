import styles from "./video.module.css";
import { Button, Carousel } from 'antd';
import { RightOutlined, LeftOutlined, RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons';
import { useState } from "react";
import { useRef } from "react";
import { Row, Col } from "antd";


export default function Video({ video }) {
    const [imageIndex, setImageIndex] = useState(0);
    const ref = useRef();

    const settings = {
        dots: false,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        SlidesToScroll: 1,

        centerMode: true,
        centerPadding: 0,
        beforeChange: (current, next) => setImageIndex(next),
    };
    return (
        <div className={styles.layout}>
            <h1 className={styles.title}>VIDEO</h1>
            <div className={styles.videoArea}>
                <div className={styles.slider}>
                    <Carousel {...settings} ref={ref} >
                        {
                            video.map((video) => (
                                <div className={styles.slide}>
                                    <iframe src={video.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    <h1>{video.name}</h1>
                                    <h2>{video.description}</h2>
                                </div>
                            ))
                        }
                    </Carousel>
                </div>
                <div className={styles.btn}>
                    <Button onClick={() => {
                        ref.current.prev();
                    }}
                    >
                        <LeftOutlined />
                    </Button>
                    <Button onClick={() => {
                        ref.current.next();
                    }}
                    >
                        < RightOutlined />
                    </Button>
                </div>
                <div className={styles.more}><a href="#"> <p>More...</p></a></div>
            </div>
        </div>
    )
}
