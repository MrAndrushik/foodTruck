import Breadcrumbs from "../../components/modules/Breadcrumbs";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideBtn from "../../components/modules/SlideBtn";
import Image from "next/image";
import Link from "next/link";
import Advantages from "../../components/foodtrucks/Advantages";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/bucket";

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
    // const res = await fetch("http://localhost:3000/api/foodtrucks");
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
    // const res = await fetch("http://localhost:3000/api/foodtrucks/" + id);
    const data = await res.json();

    return {
        props: { foodtrucks: data },
    };
};

const FoodtruckDetails = ({ foodtrucks }) => {
    const DropdownItem = ({ tarrif }) => {
        const [isOpen, setIsOpen] = useState(false);
        const ref = useRef(null);
        const dispatch = useDispatch();
        const bucketCollection = useSelector(
            (state) => state.bucket.collection
        );

        const handleFunc = () => {
            setIsOpen(!isOpen);
            if (!isOpen) {
                ref.current.style.maxHeight = ref.current.scrollHeight + "px";
            } else {
                ref.current.style.maxHeight = null;
            }
        };

        const handleTariffsClick = (index) => {
            const obj = Object.assign(foodtruck, {
                activeTariff: index,
            });
            dispatch(addToCart(obj));
        };

        return (
            <div className={styles.dropdown}>
                <div
                    onClick={() => handleFunc()}
                    className={
                        isOpen
                            ? `${styles.topBlock} ${styles.topBlockActive}`
                            : `${styles.topBlock}`
                    }
                >
                    <h3 className={styles.dropdownCaption}>{tarrif.caption}</h3>
                    <div
                        className={`${styles.dropdownPriceBlock} ${styles.desktop}`}
                    >
                        <p>Первые сутки</p>
                        <span>{`от ${tarrif.startPrice1} ₽`}</span>
                    </div>
                    <div
                        className={`${styles.dropdownPriceBlock} ${styles.desktop}`}
                    >
                        <p>Вторые сутки</p>
                        <span>{`от ${tarrif.startPrice2} ₽`}</span>
                    </div>
                    <div className={styles.icon}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div
                    ref={ref}
                    className={
                        isOpen
                            ? `${styles.bottom} ${styles.bottomActive}`
                            : `${styles.bottom}`
                    }
                >
                    <div className={`${styles.dropdownFlex} ${styles.tablet}`}>
                        <div className={`${styles.dropdownPriceBlock}`}>
                            <p>Первые сутки</p>
                            <span>{`от ${tarrif.startPrice1} ₽`}</span>
                        </div>
                        <div className={`${styles.dropdownPriceBlock}`}>
                            <p>Вторые сутки</p>
                            <span>{`от ${tarrif.startPrice2} ₽`}</span>
                        </div>
                    </div>
                    <div
                        className={`${styles.dropdownFlex} ${styles.dropdownFlex1}`}
                    >
                        <div className={styles.includedBlock}>
                            <div className={styles.flex}>
                                <svg
                                    width="17"
                                    height="16"
                                    viewBox="0 0 17 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M8.5 16C12.9183 16 16.5 12.4183 16.5 8C16.5 3.58172 12.9183 0 8.5 0C4.08172 0 0.5 3.58172 0.5 8C0.5 12.4183 4.08172 16 8.5 16ZM5.1 7.2C4.65817 6.86863 4.03137 6.95817 3.7 7.4C3.36863 7.84183 3.45817 8.46863 3.9 8.8L7.9 11.8L8.67539 12.3815L9.28087 11.6247L13.2809 6.6247C13.6259 6.19343 13.556 5.56414 13.1247 5.21913C12.6934 4.87412 12.0641 4.94404 11.7191 5.3753L8.32461 9.61846L5.1 7.2Z"
                                        fill="#22BB1E"
                                    />
                                </svg>
                                <h4>Входит в стоимость:</h4>
                            </div>
                            <ul className={styles.dropdownList}>
                                {tarrif.included.map((item, index) => (
                                    <li
                                        key={index}
                                        className={styles.dropdownItem}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.excludedBlock}>
                            <div className={styles.flex}>
                                <svg
                                    width="17"
                                    height="16"
                                    viewBox="0 0 17 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M8.5 16C12.9183 16 16.5 12.4183 16.5 8C16.5 3.58172 12.9183 0 8.5 0C4.08172 0 0.5 3.58172 0.5 8C0.5 12.4183 4.08172 16 8.5 16ZM4.5 7C3.94772 7 3.5 7.44772 3.5 8C3.5 8.55229 3.94772 9 4.5 9H12.5C13.0523 9 13.5 8.55229 13.5 8C13.5 7.44772 13.0523 7 12.5 7H4.5Z"
                                        fill="#E42323"
                                    />
                                </svg>

                                <h4>Не входит в стоимость:</h4>
                            </div>
                            <ul className={styles.dropdownList}>
                                {tarrif.excluded.map((item, index) => (
                                    <li
                                        key={index}
                                        className={styles.dropdownItem}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div
                        className={`${styles.dropdownFlex} ${styles.dropdownFlex1}`}
                    >
                        <div className={styles.dropdownTime}>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M22 12C22 12.221 21.9122 12.433 21.7559 12.5893C21.5996 12.7455 21.3877 12.8333 21.1667 12.8333C20.9457 12.8333 20.7337 12.7455 20.5774 12.5893C20.4211 12.433 20.3333 12.221 20.3333 12C20.3309 9.79061 19.4522 7.6724 17.8899 6.11012C16.3276 4.54785 14.2094 3.66909 12 3.66667C11.779 3.66667 11.567 3.57887 11.4107 3.42259C11.2545 3.26631 11.1667 3.05435 11.1667 2.83333C11.1667 2.61232 11.2545 2.40036 11.4107 2.24408C11.567 2.0878 11.779 2 12 2C14.6513 2.00287 17.1932 3.05736 19.0679 4.9321C20.9426 6.80684 21.9971 9.34872 22 12ZM15.3333 12.8333C15.5543 12.8333 15.7663 12.7455 15.9226 12.5893C16.0789 12.433 16.1667 12.221 16.1667 12C16.1667 11.779 16.0789 11.567 15.9226 11.4107C15.7663 11.2545 15.5543 11.1667 15.3333 11.1667H13.4358C13.2906 10.917 13.083 10.7094 12.8333 10.5642V7.83333C12.8333 7.61232 12.7455 7.40036 12.5893 7.24408C12.433 7.0878 12.221 7 12 7C11.779 7 11.567 7.0878 11.4107 7.24408C11.2545 7.40036 11.1667 7.61232 11.1667 7.83333V10.5642C10.9456 10.6914 10.7569 10.8679 10.615 11.0798C10.4731 11.2917 10.3819 11.5335 10.3485 11.7863C10.3151 12.0392 10.3403 12.2963 10.4222 12.5378C10.5041 12.7794 10.6405 12.9988 10.8208 13.1792C11.0012 13.3595 11.2206 13.4959 11.4622 13.5778C11.7037 13.6597 11.9608 13.6849 12.2137 13.6515C12.4665 13.6181 12.7083 13.5269 12.9202 13.385C13.1321 13.2431 13.3086 13.0544 13.4358 12.8333H15.3333ZM3.5225 7.65333C3.35768 7.65333 3.19657 7.70221 3.05953 7.79378C2.92248 7.88534 2.81567 8.01549 2.7526 8.16776C2.68953 8.32004 2.67302 8.48759 2.70518 8.64924C2.73733 8.81089 2.8167 8.95938 2.93324 9.07592C3.04979 9.19247 3.19827 9.27183 3.35993 9.30399C3.52158 9.33614 3.68913 9.31964 3.8414 9.25657C3.99367 9.19349 4.12382 9.08668 4.21539 8.94964C4.30696 8.8126 4.35583 8.65148 4.35583 8.48667C4.35583 8.26565 4.26804 8.05369 4.11176 7.89741C3.95548 7.74113 3.74351 7.65333 3.5225 7.65333ZM3.66667 12C3.66667 11.8352 3.61779 11.6741 3.52623 11.537C3.43466 11.4 3.30451 11.2932 3.15224 11.2301C2.99996 11.167 2.83241 11.1505 2.67076 11.1827C2.50911 11.2148 2.36062 11.2942 2.24408 11.4107C2.12753 11.5273 2.04817 11.6758 2.01601 11.8374C1.98386 11.9991 2.00036 12.1666 2.06343 12.3189C2.12651 12.4712 2.23332 12.6013 2.37036 12.6929C2.5074 12.7845 2.66852 12.8333 2.83333 12.8333C3.05435 12.8333 3.26631 12.7455 3.42259 12.5893C3.57887 12.433 3.66667 12.221 3.66667 12ZM12 20.3333C11.8352 20.3333 11.6741 20.3822 11.537 20.4738C11.4 20.5653 11.2932 20.6955 11.2301 20.8478C11.167 21 11.1505 21.1676 11.1827 21.3292C11.2148 21.4909 11.2942 21.6394 11.4107 21.7559C11.5273 21.8725 11.6758 21.9518 11.8374 21.984C11.9991 22.0161 12.1666 21.9996 12.3189 21.9366C12.4712 21.8735 12.6013 21.7667 12.6929 21.6296C12.7845 21.4926 12.8333 21.3315 12.8333 21.1667C12.8333 20.9457 12.7455 20.7337 12.5893 20.5774C12.433 20.4211 12.221 20.3333 12 20.3333ZM5.5175 4.6725C5.35268 4.6725 5.19157 4.72137 5.05453 4.81294C4.91748 4.90451 4.81067 5.03466 4.7476 5.18693C4.68453 5.3392 4.66803 5.50676 4.70018 5.66841C4.73233 5.83006 4.8117 5.97855 4.92824 6.09509C5.04479 6.21163 5.19327 6.291 5.35493 6.32315C5.51658 6.35531 5.68413 6.33881 5.8364 6.27573C5.98867 6.21266 6.11882 6.10585 6.21039 5.96881C6.30196 5.83177 6.35083 5.67065 6.35083 5.50583C6.35083 5.28482 6.26304 5.07286 6.10676 4.91658C5.95048 4.7603 5.73851 4.6725 5.5175 4.6725ZM8.4825 2.70083C8.31768 2.70083 8.15657 2.74971 8.01953 2.84128C7.88248 2.93284 7.77567 3.06299 7.7126 3.21526C7.64953 3.36754 7.63303 3.53509 7.66518 3.69674C7.69733 3.85839 7.7767 4.00688 7.89324 4.12342C8.00979 4.23997 8.15827 4.31933 8.31992 4.35149C8.48158 4.38364 8.64913 4.36714 8.8014 4.30407C8.95367 4.24099 9.08382 4.13418 9.17539 3.99714C9.26696 3.8601 9.31583 3.69898 9.31583 3.53417C9.31583 3.31315 9.22804 3.10119 9.07176 2.94491C8.91548 2.78863 8.70351 2.70083 8.4825 2.70083ZM3.5225 14.68C3.35768 14.68 3.19657 14.7289 3.05953 14.8204C2.92248 14.912 2.81567 15.0422 2.7526 15.1944C2.68953 15.3467 2.67302 15.5143 2.70518 15.6759C2.73733 15.8376 2.8167 15.986 2.93324 16.1026C3.04979 16.2191 3.19827 16.2985 3.35993 16.3307C3.52158 16.3628 3.68913 16.3463 3.8414 16.2832C3.99367 16.2202 4.12382 16.1133 4.21539 15.9763C4.30696 15.8393 4.35583 15.6782 4.35583 15.5133C4.35583 15.2923 4.26804 15.0804 4.11176 14.9241C3.95548 14.7678 3.74351 14.68 3.5225 14.68ZM5.5175 17.6608C5.35268 17.6608 5.19157 17.7097 5.05453 17.8013C4.91748 17.8928 4.81067 18.023 4.7476 18.1753C4.68453 18.3275 4.66803 18.4951 4.70018 18.6567C4.73233 18.8184 4.8117 18.9669 4.92824 19.0834C5.04479 19.2 5.19327 19.2793 5.35493 19.3115C5.51658 19.3436 5.68413 19.3271 5.8364 19.2641C5.98867 19.201 6.11882 19.0942 6.21039 18.9571C6.30196 18.8201 6.35083 18.659 6.35083 18.4942C6.35083 18.2732 6.26304 18.0612 6.10676 17.9049C5.95048 17.7486 5.73851 17.6608 5.5175 17.6608ZM8.4825 19.6325C8.31768 19.6325 8.15657 19.6814 8.01953 19.7729C7.88248 19.8645 7.77567 19.9947 7.7126 20.1469C7.64953 20.2992 7.63303 20.4668 7.66518 20.6284C7.69733 20.7901 7.7767 20.9385 7.89324 21.0551C8.00979 21.1716 8.15827 21.251 8.31992 21.2832C8.48158 21.3153 8.64913 21.2988 8.8014 21.2357C8.95367 21.1727 9.08382 21.0658 9.17539 20.9288C9.26696 20.7918 9.31583 20.6307 9.31583 20.4658C9.31583 20.2448 9.22804 20.0329 9.07176 19.8766C8.91548 19.7203 8.70351 19.6325 8.4825 19.6325ZM20.4775 14.68C20.3127 14.68 20.1516 14.7289 20.0145 14.8204C19.8775 14.912 19.7707 15.0422 19.7076 15.1944C19.6445 15.3467 19.628 15.5143 19.6602 15.6759C19.6923 15.8376 19.7717 15.986 19.8882 16.1026C20.0048 16.2191 20.1533 16.2985 20.3149 16.3307C20.4766 16.3628 20.6441 16.3463 20.7964 16.2832C20.9487 16.2202 21.0788 16.1133 21.1704 15.9763C21.262 15.8393 21.3108 15.6782 21.3108 15.5133C21.3108 15.2923 21.223 15.0804 21.0668 14.9241C20.9105 14.7678 20.6985 14.68 20.4775 14.68ZM18.4825 17.6608C18.3177 17.6608 18.1566 17.7097 18.0195 17.8013C17.8825 17.8928 17.7757 18.023 17.7126 18.1753C17.6495 18.3275 17.633 18.4951 17.6652 18.6567C17.6973 18.8184 17.7767 18.9669 17.8932 19.0834C18.0098 19.2 18.1583 19.2793 18.3199 19.3115C18.4816 19.3436 18.6491 19.3271 18.8014 19.2641C18.9537 19.201 19.0838 19.0942 19.1754 18.9571C19.267 18.8201 19.3158 18.659 19.3158 18.4942C19.3158 18.2732 19.228 18.0612 19.0718 17.9049C18.9155 17.7486 18.7035 17.6608 18.4825 17.6608ZM15.5175 19.6325C15.3527 19.6325 15.1916 19.6814 15.0545 19.7729C14.9175 19.8645 14.8107 19.9947 14.7476 20.1469C14.6845 20.2992 14.668 20.4668 14.7002 20.6284C14.7323 20.7901 14.8117 20.9385 14.9282 21.0551C15.0448 21.1716 15.1933 21.251 15.3549 21.2832C15.5166 21.3153 15.6841 21.2988 15.8364 21.2357C15.9887 21.1727 16.1188 21.0658 16.2104 20.9288C16.302 20.7918 16.3508 20.6307 16.3508 20.4658C16.3508 20.2448 16.263 20.0329 16.1068 19.8766C15.9505 19.7203 15.7385 19.6325 15.5175 19.6325Z"
                                    fill="#646464"
                                />
                            </svg>

                            <p>
                                Время аренды вы можете изменить в{" "}
                                <Link href="/bucket">
                                    <a>Корзине</a>
                                </Link>
                            </p>
                        </div>
                        {bucketCollection.filter(
                            (item) => item.activeTariff === tarrif.id
                        ).length === 0 ? (
                            <button
                                onClick={() => handleTariffsClick(tarrif.id)}
                                className={styles.bucket}
                            >
                                Добавить в корзину
                            </button>
                        ) : (
                            <button
                                className={`${styles.bucket} ${styles.bucketBlack}`}
                            >
                                Добавлено в корзину
                            </button>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    const foodtruck = foodtrucks[0];
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
            <section className={styles.tariff}>
                <div className="container">
                    <h2 className={`${styles.caption} stn-title`}>
                        Выберите тариф этого фудтрака
                    </h2>
                    <div className={styles.wrapper}>
                        {foodtruck.tariffs.map((tarrif) => (
                            <DropdownItem tarrif={tarrif} key={tarrif.id} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FoodtruckDetails;
