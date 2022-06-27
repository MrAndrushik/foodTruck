import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { setDetailsSwiperContent } from "../../redux/toolkitSlice";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideBtn from "../modules/SlideBtn";

import "swiper/css";
import "swiper/css/navigation";
import styles from "../../styles/modules/DetailsModalSwiper.module.scss";

const DetailsModalSwiper = () => {
    const detailsSwiperContent = useSelector(
        (state) => state.toolkit.detailsSwiperContent
    );
    const gallery = detailsSwiperContent.content;
    const activeIndex = detailsSwiperContent.activeIndex;
    const isOpen = Object.keys(detailsSwiperContent).length !== 0;

    const dispatch = useDispatch();

    return (
        <div
            className={
                isOpen
                    ? `${styles.overflow} ${styles.overflowActive}`
                    : `${styles.overflow}`
            }
        >
            <div className={`${styles.modal} container`}>
                <button
                    onClick={() => dispatch(setDetailsSwiperContent({}))}
                    className={styles.close}
                >
                    <Image
                        src="/img/modal-close.svg"
                        alt="Close"
                        width={42}
                        height={35}
                    />
                </button>
                {isOpen && (
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView="1"
                        initialSlide={activeIndex}
                        className={`${styles.swiper}`}
                    >
                        {gallery?.map((imgSrc, index) => (
                            <SwiperSlide
                                className={styles.swiperSlide}
                                key={index}
                            >
                                <div className="slide-wrapper">
                                    <div className={`${styles.slide}`}>
                                        <Image
                                            src={imgSrc}
                                            width="946"
                                            height="510"
                                            layout="responsive"
                                            alt="slide"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        <SlideBtn
                            adaptive="full"
                            type="prev"
                            position="bottom"
                            aside="left"
                        />
                        <SlideBtn
                            adaptive="full"
                            type="next"
                            position="bottom"
                            aside="right"
                        />
                    </Swiper>
                )}
            </div>
        </div>
    );
};

export default DetailsModalSwiper;
