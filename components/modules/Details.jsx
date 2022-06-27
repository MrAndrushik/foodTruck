import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    setDetailsContent,
    setDetailsSwiperContent,
} from "../../redux/toolkitSlice";
import { addToCart, incrQuantity, decrQuantity } from "../../redux/bucket";
import DetailsModalSwiper from "./DetailsModalSwiper";

import "swiper/css";
import "swiper/css/navigation";
import styles from "../../styles/modules/Details.module.scss";

const Details = () => {
    const detailsContent = useSelector((state) => state.toolkit.detailsContent);
    const isDetailsEmpty = Object.keys(detailsContent).length === 0;
    const dispatch = useDispatch();

    const bucketCollection = useSelector((state) => state.bucket.collection);
    const currentCardInBucket = bucketCollection.filter(
        (bucket) => bucket.id === detailsContent.id
    )[0];

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
            <DetailsModalSwiper />
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
                                                    onClick={() =>
                                                        dispatch(
                                                            setDetailsSwiperContent(
                                                                Object.assign({
                                                                    content:
                                                                        detailsContent.gallery,
                                                                    activeIndex:
                                                                        index,
                                                                })
                                                            )
                                                        )
                                                    }
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
                                        layout="responsive"
                                        width="365"
                                        height="229"
                                        alt="slide"
                                    />
                                </div>
                            )}
                            <div className="container">
                                <h2 className={`${styles.title} stn-title`}>
                                    {detailsContent.caption}
                                </h2>
                                {detailsContent.descr?.map(
                                    (description, index) => (
                                        <p key={index} className={styles.descr}>
                                            {description}
                                        </p>
                                    )
                                )}

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
                                {!currentCardInBucket ? (
                                    <button
                                        className={styles.btn}
                                        onClick={() =>
                                            dispatch(addToCart(detailsContent))
                                        }
                                    >
                                        + Добавить в корзину
                                    </button>
                                ) : (
                                    <div className={styles.quantityBlock}>
                                        <button
                                            onClick={() =>
                                                dispatch(
                                                    decrQuantity(
                                                        currentCardInBucket
                                                    )
                                                )
                                            }
                                        >
                                            <svg
                                                width="17"
                                                height="3"
                                                viewBox="0 0 17 3"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M0 1.25C0 0.559644 0.559644 0 1.25 0H15.75C16.4404 0 17 0.559644 17 1.25C17 1.94036 16.4404 2.5 15.75 2.5H1.25C0.559644 2.5 0 1.94036 0 1.25Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </button>
                                        <span>
                                            {currentCardInBucket.quantity}
                                        </span>
                                        <button
                                            onClick={() =>
                                                dispatch(
                                                    incrQuantity(
                                                        currentCardInBucket
                                                    )
                                                )
                                            }
                                        >
                                            <svg
                                                width="17"
                                                height="17"
                                                viewBox="0 0 17 17"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M8.5 0C9.19036 0 9.75 0.559644 9.75 1.25V7H15.75C16.4404 7 17 7.55964 17 8.25C17 8.94036 16.4404 9.5 15.75 9.5H9.75V15.75C9.75 16.4404 9.19036 17 8.5 17C7.80964 17 7.25 16.4404 7.25 15.75V9.5H1.25C0.559644 9.5 0 8.94036 0 8.25C0 7.55964 0.559644 7 1.25 7H7.25V1.25C7.25 0.559644 7.80964 0 8.5 0Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                )}
                            </div>
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
