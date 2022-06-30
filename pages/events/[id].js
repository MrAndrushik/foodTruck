import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
// next breadcrumb
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideBtn from "../../components/modules/SlideBtn";
import { useRouter } from "next/router";

import "swiper/css";
import "swiper/css/navigation";

import styles from "../../styles/modules/Events.module.scss";
import Breadcrumbs from "../../components/modules/Breadcrumbs";

export const getStaticPaths = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_SITE_URL + "/api/events/");
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
        process.env.NEXT_PUBLIC_SITE_URL + "/api/events/" + id
    );
    const data = await res.json();

    return {
        props: { events: data },
    };
};

const EventsDetails = ({ events }) => {
    return (
        <>
            <Head itemScope itemType="http://schema.org/WPHeader">
                <title itemProp="headline">{events[0].metaTitle}</title>
                <meta
                    itemProp="description"
                    name="description"
                    content={`${events[0].metaDescr}`}
                />
                <meta
                    itemProp="keywords"
                    name="keywords"
                    content="ключевые_слова_для_страницы"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className={styles.section}>
                <Breadcrumbs />
                {events.map((event) => (
                    <article
                        itemProp="blogPosts"
                        itemScope
                        itemType="http://schema.org/BlogPosting"
                        key={event.id}
                        className={styles.container}
                    >
                        <h1 itemProp="headline" className={styles.mainTitle}>
                            {event.caption}
                        </h1>
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
                                        <div
                                            itemProp="image"
                                            className={`${styles.slide}`}
                                        >
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
                        <div
                            itemProp="articleBody"
                            className={styles.textBlock}
                        >
                            <h2 className={styles.descrTitle}>Описание</h2>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: event.fullDescr,
                                }}
                            ></div>
                        </div>
                    </article>
                ))}
            </section>
        </>
    );
};

export default EventsDetails;
