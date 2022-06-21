import { useState } from "react";
import Image from "next/image";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import styles from "../../styles/modules/Gallery.module.scss";
import SlideBtn from "./SlideBtn";
import Tags from "./Tags";

const Gallery = ({ obj }) => {
    const [activeTag, setActiveTag] = useState("Все");
    const tags = obj.tags;
    const catalog = obj.catalog;
    console.log();
    return (
        <section className={styles.gallery}>
            <div className="container">
                {obj.title && (
                    <h2 className={`${styles.title} stn-title`}>{obj.title}</h2>
                )}
            </div>
            {tags && (
                <Tags
                    tags={tags}
                    activeTag={activeTag}
                    setActiveTag={setActiveTag}
                />
            )}
            <Swiper
                modules={[Navigation]}
                slidesPerView="auto"
                className={`${styles.swiper} gallery__swiper`}
                grabCursor
                autoHeight
                breakpoints={{
                    1170: {
                        spaceBetween: 20,
                        centeredSlides: true,
                    },
                    0: {
                        spaceBetween: 10,
                        centeredSlides: true,
                    },
                }}
            >
                {activeTag !== "Все" &&
                    catalog
                        .filter((item) => item.tags.includes(activeTag))[0]
                        .gallery.map((item, index) => (
                            <SwiperSlide
                                className={styles.swiperSlide}
                                key={index}
                            >
                                <div className="slide-wrapper">
                                    <div className={`${styles.slide}`}>
                                        <Image
                                            src={item}
                                            layout="fill"
                                            alt="slide"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                {activeTag === "Все" &&
                    catalog.map((item, index) =>
                        item.gallery.map((gallery, index) => (
                            <SwiperSlide
                                className={styles.swiperSlide}
                                key={index}
                            >
                                <div className="slide-wrapper">
                                    <div className={`${styles.slide}`}>
                                        <Image
                                            src={gallery}
                                            layout="fill"
                                            alt="slide"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    )}
                <SlideBtn adaptive="desktop" type="next" />
            </Swiper>
        </section>
    );
};

export default Gallery;
