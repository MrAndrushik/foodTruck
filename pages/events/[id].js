import Image from "next/image";
import Link from "next/link";
// next breadcrumb
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideBtn from "../../components/modules/SlideBtn";

import "swiper/css";
import "swiper/css/navigation";

import styles from "../../styles/modules/Events.module.scss";
import Breadcrumbs from "../../components/modules/Breadcrumbs";

export const getStaticPaths = async () => {
    const res = await fetch("https://food-truck-nine.vercel.app/api/events");
    const data = await res.json();
    const paths = data.map((item) => {
        return {
            params: { id: item.id.toString() },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(
        "https://food-truck-nine.vercel.app/api/events/" + id
    );
    const data = await res.json();

    return {
        props: { events: data },
    };
};

const EventsDetails = ({ events }) => {
    return (
        <section className={styles.section}>
            <Breadcrumbs />
            {events.map((event) => (
                <div key={event.id} className={styles.container}>
                    <h1 className={styles.mainTitle}>{event.caption}</h1>
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
                        {event.gallery.map((item, index) => (
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
                        <SlideBtn adaptive="desktop" type="next" />
                    </Swiper>
                    <div className={styles.textBlock}>
                        <h2 className={styles.descrTitle}>Описание</h2>
                        {event.fullDescrArr.map((descr, index) => (
                            <p key={index} className={styles.text}>
                                {descr}
                            </p>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default EventsDetails;
