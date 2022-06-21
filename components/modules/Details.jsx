import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { setDetailsContent } from "../../redux/toolkitSlice";

import "swiper/css";
import "swiper/css/navigation";
import styles from "../../styles/modules/Details.module.scss";

const Details = () => {
    const detailsContent = useSelector((state) => state.toolkit.detailsContent);
    const isDetailsEmpty = Object.keys(detailsContent).length === 0;
    const dispatch = useDispatch();

    const handleClose = () => {
        document.querySelector("html").classList.remove("hidden");
        dispatch(setDetailsContent({}));
    };

    return (
        <div
            className={
                !isDetailsEmpty
                    ? `${styles.overflow} ${styles.overflowActive}`
                    : `${styles.overflow}`
            }
        >
            <div className={`${styles.modal} container`}>
                <button onClick={() => handleClose()} className={styles.close}>
                    <Image
                        src="/img/modal-close.svg"
                        alt="Close"
                        width={42}
                        height={35}
                    />
                </button>
                {!isDetailsEmpty && (
                    <div className={styles.wrapper}>
                        <section className={styles.top}>
                            {detailsContent.gallery ? (
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
                                    {detailsContent.gallery &&
                                        detailsContent.gallery.map(
                                            (imgSrc, index) => (
                                                <SwiperSlide
                                                    className={
                                                        styles.swiperSlide
                                                    }
                                                    key={index}
                                                >
                                                    <div className="slide-wrapper">
                                                        <div
                                                            className={`${styles.slide}`}
                                                        >
                                                            <Image
                                                                src={imgSrc}
                                                                layout="fill"
                                                                alt="slide"
                                                            />
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        )}
                                </Swiper>
                            ) : (
                                <div className={styles.imgBlock}>
                                    <Image
                                        src={detailsContent.imgSrc}
                                        layout="fill"
                                        alt="slide"
                                    />
                                </div>
                            )}
                            <h2 className={`${styles.title} stn-title`}>
                                {detailsContent.caption}
                            </h2>
                            {detailsContent.descr?.map((description, index) => (
                                <p key={index} className={styles.descr}>
                                    {description}
                                </p>
                            ))}
                            <div className={styles.priceBlock}>
                                <div className={styles.priceItem}>
                                    <p className={styles.price}>
                                        {detailsContent.startPrice1} ₽
                                        <span>Первые 4 часа</span>
                                    </p>
                                </div>
                                <div className={styles.priceItem}>
                                    <p className={styles.price}>
                                        {detailsContent.startPrice2} ₽
                                        <span>Следующий час</span>
                                    </p>
                                </div>
                            </div>
                            <button className={styles.btn}>
                                + Добавить в корзину
                            </button>
                        </section>
                        {detailsContent.include && (
                            <section className={styles.include}>
                                <h3 className={styles.caption}>
                                    Что входит в стоимость
                                </h3>
                                <div className={styles.flex}>
                                    {detailsContent.include.map(
                                        (item, index) => (
                                            <div
                                                key={index}
                                                className={styles.item}
                                            >
                                                <div className={styles.itemImg}>
                                                    <Image
                                                        src={item.imgSrc}
                                                        alt="card"
                                                        width="192"
                                                        height="130"
                                                    />
                                                </div>
                                                <h4
                                                    className={styles.itemDescr}
                                                >
                                                    {item.caption}
                                                </h4>
                                            </div>
                                        )
                                    )}
                                </div>
                            </section>
                        )}
                        {detailsContent.upsale && (
                            <section className={styles.upsale}>
                                <h3 className={styles.caption}>
                                    Дополнительно можете заказать
                                </h3>
                                <p className={styles.notice}>
                                    Уточняйте у менеджера
                                </p>
                                <div className={styles.flex}>
                                    {detailsContent.upsale.map(
                                        (item, index) => (
                                            <div
                                                key={index}
                                                className={styles.item}
                                            >
                                                <div className={styles.itemImg}>
                                                    <Image
                                                        src={item.imgSrc}
                                                        alt="card"
                                                        width="192"
                                                        height="130"
                                                    />
                                                </div>
                                                <h4
                                                    className={styles.itemDescr}
                                                >
                                                    {item.caption}
                                                </h4>
                                            </div>
                                        )
                                    )}
                                </div>
                            </section>
                        )}
                        {detailsContent.characteristic && (
                            <section className={styles.characteristic}>
                                <h3 className={styles.caption}>
                                    {detailsContent.characteristic.title}
                                </h3>
                                <div className={styles.block}>
                                    {detailsContent.characteristic.information.map(
                                        (item, index) => (
                                            <div
                                                key={index}
                                                className={styles.blockItem}
                                            >
                                                <p
                                                    className={
                                                        styles.blockCaption
                                                    }
                                                >
                                                    {item.caption}
                                                </p>
                                                {item.descr && (
                                                    <span
                                                        className={
                                                            styles.blockText
                                                        }
                                                    >
                                                        {item.descr}
                                                    </span>
                                                )}
                                            </div>
                                        )
                                    )}
                                </div>
                            </section>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Details;
