import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import data from "../../public/data/gifts.json";

import "swiper/css";
import styles from "../../styles/modules/Gifts.module.scss";

const Gifts = () => {
    return (
        <section className={styles.gifts}>
            <div className={`${styles.container} container`}>
                <h2 className={`${styles.title} stn-title`}>
                    А ещё дарим подарки
                </h2>
                <div className={styles.wrapper}>
                    <Swiper
                        spaceBetween={20}
                        className={`${styles.swiper} swiper-light`}
                        grabCursor
                        breakpoints={{
                            0: {
                                slidesPerView: "auto",
                            },

                            710: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {data.map((item, index) => (
                            <SwiperSlide className={styles.slide} key={index}>
                                <div className={styles.block}>
                                    <div className={styles.imgBlock}>
                                        <Image
                                            src={item.imgSrc}
                                            alt="gift"
                                            width={188}
                                            height={142}
                                        />
                                    </div>
                                    <div className={styles.content}>
                                        <h3 className={styles.caption}>
                                            {item.caption}
                                        </h3>
                                        <p className={styles.descr}>
                                            {item.descr}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <p className={styles.notice}>Уточняйте отдельно у менеджера</p>
            </div>
        </section>
    );
};

export default Gifts;
