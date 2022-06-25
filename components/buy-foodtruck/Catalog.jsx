import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import styles from "../../styles/buy-foodtruck/Catalog.module.scss";

const Catalog = ({ arr }) => {
    return (
        <section className={styles.section}>
            <h2 className={`${styles.heading} stn-title`}>
                Фудтраки на продажу
            </h2>
            {arr.map((item, index) => (
                <div
                    key={index}
                    className={
                        index % 2 === 1 ? `${styles.block2}` : `${styles.block}`
                    }
                >
                    <div className={`${styles.container} container`}>
                        <div>
                            <Swiper
                                modules={[Navigation, Pagination]}
                                pagination={{
                                    type: "fraction",
                                }}
                                slidesPerView="auto"
                                className={`${styles.swiper}`}
                            >
                                {item.gallery?.map((imgSrc, index) => (
                                    <SwiperSlide
                                        key={index}
                                        className={styles.swiperSlide}
                                    >
                                        <div className={styles.imgBlock}>
                                            <Image
                                                src={imgSrc}
                                                alt="slide"
                                                width={559}
                                                height={301}
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.title}>{item.title}</h3>
                            <p className={styles.descr}>{item.descr}</p>
                            <div className={styles.parametrsBlock}>
                                {item.parametrs.map((parametr, index) => (
                                    <div
                                        key={index}
                                        className={styles.parametr}
                                    >
                                        <h4 className={styles.caption}>
                                            {parametr.caption}
                                        </h4>
                                        <p className={styles.value}>
                                            {parametr.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <h4 className={styles.caption}>Оснащение</h4>
                            <ul className={styles.list}>
                                {item.equipment.map((item, index) => (
                                    <li key={index} className={styles.listItem}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className={styles.priceBlock}>
                                <h4 className={styles.caption}>Стоимость</h4>
                                <span className={styles.value}>
                                    от {item.price} ₽
                                </span>
                            </div>
                            <button className={styles.btn}>
                                Оставить заявку
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Catalog;
