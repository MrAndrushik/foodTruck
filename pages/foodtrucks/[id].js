import Breadcrumbs from "../../components/modules/Breadcrumbs";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideBtn from "../../components/modules/SlideBtn";
import Image from "next/image";
import Advantages from "../../components/foodtrucks/Advantages";

import "swiper/css";
import "swiper/css/navigation";
import styles from "../../styles/foodtrucks/FoodtruckDetails.module.scss";

// DATA
import CookData from "../../public/data/foodtrucks/details/cooking.json";
import AdvantagesData from "../../public/data/foodtrucks/advantages.json";
import RecipeData from "../../public/data/foodtrucks/details/recipe.json";

export const getStaticPaths = async () => {
    const res = await fetch(
        "https://food-truck-nine.vercel.app/api/foodtrucks"
    );
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
        "https://food-truck-nine.vercel.app/api/foodtrucks/" + id
    );
    const data = await res.json();

    return {
        props: { foodtrucks: data },
    };
};

const FoodtruckDetails = ({ foodtrucks }) => {
    const foodtruck = foodtrucks[0];
    // return (
    //     <>
    //         <section className={styles.section}>
    //             <Breadcrumbs />
    //             <h1 className={`${styles.title} stn-title`}>
    //                 {foodtruck.caption}
    //             </h1>
    //             <Swiper
    //                 modules={[Navigation]}
    //                 slidesPerView="auto"
    //                 className={`${styles.swiper} gallery__swiper`}
    //                 grabCursor
    //                 autoHeight
    //                 breakpoints={{
    //                     1170: {
    //                         spaceBetween: 20,
    //                         centeredSlides: true,
    //                     },
    //                     0: {
    //                         spaceBetween: 10,
    //                         centeredSlides: true,
    //                     },
    //                 }}
    //             >
    //                 {foodtruck.gallery.map((item, index) => (
    //                     <SwiperSlide className={styles.swiperSlide} key={index}>
    //                         <div className="slide-wrapper">
    //                             <div className={`${styles.slide}`}>
    //                                 <Image
    //                                     src={item}
    //                                     layout="fill"
    //                                     alt="slide"
    //                                 />
    //                             </div>
    //                         </div>
    //                     </SwiperSlide>
    //                 ))}
    //                 <SlideBtn adaptive="desktop" type="next" />
    //             </Swiper>
    //         </section>
    //         <section className={styles.characteristic}>
    //             <h2 className={`${styles.caption} stn-title`}>
    //                 {foodtruck.characteristic.title}
    //             </h2>
    //             <div className={styles.block}>
    //                 {foodtruck.characteristic.information.map((item, index) => (
    //                     <div key={index} className={styles.blockItem}>
    //                         <p className={styles.blockCaption}>
    //                             {item.caption}
    //                         </p>
    //                         <div className={styles.descrBlock}>
    //                             {item.descr.map((descr, index) => (
    //                                 <p key={index} className={styles.blockText}>
    //                                     {descr}
    //                                 </p>
    //                             ))}
    //                         </div>
    //                     </div>
    //                 ))}
    //             </div>
    //         </section>
    //         <Advantages obj={CookData} border={false} background="right" />
    //         <Advantages obj={AdvantagesData} />
    //         <Advantages obj={RecipeData} border={false} background="right" />
    //         <section className={styles.poster}>
    //             <div className={styles.imgBlock}>
    //                 <Image
    //                     src="/img/foodtrucks/poster.png"
    //                     layout="fill"
    //                     alt="food"
    //                     objectFit="cover"
    //                 />
    //             </div>
    //             <div className={styles.content}>
    //                 <p>
    //                     В наличии более чем 30 видов блюд и более 15 видов
    //                     оборудования для фудтрака.{" "}
    //                     <span>Более подробно расскажет наш менеджер</span>
    //                 </p>
    //                 <button className={styles.btn}>Оставить заявку</button>
    //             </div>
    //         </section>
    //     </>
    // );
    return (
        <div>
            <section className={styles.section}>
                <Breadcrumbs />{" "}
                <h1 className={`${styles.title} stn-title`}>
                    {foodtruck.caption}{" "}
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
                    {foodtruck.gallery.map((item, index) => (
                        <SwiperSlide className={styles.swiperSlide} key={index}>
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
            </section>
            <section className={styles.characteristic}>
                <h2 className={`${styles.caption} stn-title`}>
                    {foodtruck.characteristic.title}
                </h2>
                <div className={styles.block}>
                    {foodtruck.characteristic.information.map((item, index) => (
                        <div key={index} className={styles.blockItem}>
                            <p className={styles.blockCaption}>
                                {item.caption}
                            </p>
                            <div className={styles.descrBlock}>
                                {item.descr.map((descr, index) => (
                                    <p key={index} className={styles.blockText}>
                                        {descr}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Advantages obj={CookData} border={false} background="right" />
            <Advantages obj={AdvantagesData} />
            <Advantages obj={RecipeData} border={false} background="right" />
            <section className={styles.poster}>
                <div className={styles.imgBlock}>
                    <Image
                        src="/img/foodtrucks/poster.png"
                        layout="fill"
                        alt="food"
                        objectFit="cover"
                    />
                </div>
                <div className={styles.content}>
                    <p>
                        В наличии более чем 30 видов блюд и более 15 видов
                        оборудования для фудтрака.{" "}
                        <span>Более подробно расскажет наш менеджер</span>
                    </p>
                    <button className={styles.btn}>Оставить заявку</button>
                </div>
            </section>
        </div>
    );
};

export default FoodtruckDetails;
