import { useState } from "react";
import Tags from "./Tags";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import styles from "../../styles/modules/Upsale.module.scss";
import Card from "./Card";
import SlideBtn from "./SlideBtn";

const Upsale = ({ obj }) => {
    const tags = obj.tags;
    const catalog = obj.catalog;

    const [activeTag, setActiveTag] = useState("Все");

    return (
        <section className={styles.section}>
            <div className={`${styles.container} container`}>
                <h2 className={`${styles.title} stn-title`}>{obj.title}</h2>
            </div>
            <Tags
                tags={tags}
                activeTag={activeTag}
                setActiveTag={setActiveTag}
            />
            <Swiper
                modules={[Navigation]}
                slidesPerView="auto"
                className={`${styles.swiper} upsale__swiper`}
                grabCursor
                autoHeight
                breakpoints={{
                    1170: {
                        spaceBetween: 20,
                        centeredSlides: false,
                    },
                    0: {
                        spaceBetween: 10,
                        centeredSlides: false,
                    },
                }}
            >
                {catalog.map(
                    (item) =>
                        (activeTag === "Все" ||
                            item.tags.includes(activeTag)) && (
                            <SwiperSlide
                                className={`${styles.swiperSlide}`}
                                key={item.id}
                            >
                                <Card obj={item} bucket={true} key={item.id} />
                            </SwiperSlide>
                        )
                )}
                <SlideBtn type="next" adaptive="full" />
                <SlideBtn type="prev" adaptive="tablet" />
            </Swiper>
        </section>
    );
};

export default Upsale;
