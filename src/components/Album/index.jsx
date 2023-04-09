import styles from "./album.module.css";
import { Button, Carousel } from 'antd';
import { RightOutlined, LeftOutlined,RightCircleOutlined,LeftCircleOutlined} from '@ant-design/icons';
import { useState } from "react";
import { useRef } from "react";



export default function Album({ images }) {
  const [imageIndex, setImageIndex] = useState(0);
  const ref = useRef();
  
  const breakpoints = {
    xs: 480,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1600,
  };
  const responsive = {
    xs: {
      dots: false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    },
    sm: {
      dots: false,
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1,
    },
    md: {
      dots: false,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
    },
    lg: {
      dots: false,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 1,
    },
    xl: {
      dots: false,
      arrows: false,
      slidesToShow: 5,
      slidesToScroll: 1,
    },
  };
 
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    SlidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <div className={styles.album}>
      <div className={styles.layout}>
        <h1 className={styles.title}>ALBUM</h1>
        <div className={styles.slider}>
          <Carousel {...settings} ref={ref}>
            {
              images.map((img, idx) => (
                <div className={idx === imageIndex ? styles.activeSlide : styles.slide}>
                  <a><img src={img.img} /></a>
                  <div className={styles.description}>
                    <p className={styles.name}>{img.name}</p>
                    <p className={styles.albumName}>{img.description}</p>
                  </div>
                </div>
              ))
            }
          </Carousel>
        </div>
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
  );
}
