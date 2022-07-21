import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Burger,
    BurgerClose,
    Email,
    Facebook,
    Marker,
    Telephone,
    Nav1,
    Nav2,
    Nav3,
    Nav4,
    Nav5,
    Search,
    Favorites,
    Cart,
    Nav6,
} from "./SvgSprite";

import data2 from "../../public/data/foodtrucks/catalog.json";
import data3 from "../../public/data/furniture/catalog.json";
import data4 from "../../public/data/kiosks/catalog.json";
import data5 from "../../public/data/master-class/catalog.json";
import data6 from "../../public/data/stations/catalog.json";

const searchArr = new Array(
    data2.catalog,
    data3.catalog,
    data4.catalog,
    data5.catalog,
    data6.catalog
);

import { setDetailsContent, setFeedbackIsOpen } from "../../redux/toolkitSlice";
import { useDispatch, useSelector } from "react-redux";
import {
    ARENDA_SHATROV_ROUTE,
    ARENDA_ULICHNOY_MEBELI_ROUTE,
    BUCKET_ROUTE,
    CONTACTS_ROUTE,
    EVENTS_ROUTE,
    FAVORITES_ROUTE,
    FUDTRAKI_NA_MEROPRIYATIE_ROUTE,
    KULINARNYE_STANCII_ROUTE,
    MASTER_CLASS_ROUTE,
    PRODAZHA_FUDTRAKOV_ROUTE,
} from "../../const/routes";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [value, setValue] = useState("");
    const headerTopRef = useRef(null);
    const headerRef = useRef(null);

    useEffect(() => {
        const topHeight = headerTopRef.current.clientHeight;
        document.addEventListener("scroll", () => {
            if (window.pageYOffset >= topHeight) {
                headerTopRef.current?.classList.add("header-top--none");
                headerRef.current?.classList.add("header--fixed");
            } else {
                headerTopRef.current?.classList.remove("header-top--none");
                headerRef.current?.classList.remove("header--fixed");
            }
        });
    }, []);

    const bucketCollection = useSelector((state) => state.bucket.collection);
    const liked = useSelector((state) => state.bucket.liked);

    const dispatch = useDispatch();

    const navLinks = [
        {
            href: FUDTRAKI_NA_MEROPRIYATIE_ROUTE,
            Component: <Nav1 />,
            text: "Фудтраки",
        },
        {
            href: ARENDA_ULICHNOY_MEBELI_ROUTE,
            Component: <Nav2 />,
            text: "Аренда мебели",
        },
        {
            href: KULINARNYE_STANCII_ROUTE,
            Component: <Nav3 />,
            text: "Кулинарные станции",
        },
        {
            href: ARENDA_SHATROV_ROUTE,
            Component: <Nav4 />,
            text: "Киоски, шатры",
        },
        {
            href: MASTER_CLASS_ROUTE,
            Component: <Nav5 />,
            text: "Мастер-классы",
        },
        {
            href: PRODAZHA_FUDTRAKOV_ROUTE,
            Component: <Nav6 />,
            text: "Купить фудтрак",
        },
    ];

    const getCoords = (elem) => {
        let box = elem.getBoundingClientRect();
        return {
            top: box.top + window.pageYOffset,
        };
    };

    const handleOverlay = (bool) => {
        if (bool === false) {
            document.querySelector("html").classList.remove("hidden");
            setIsOpen(false);
        } else if (bool === true) {
            document.querySelector("html").classList.add("hidden");
            setIsOpen(true);
        } else if (isOpen === true) {
            document.querySelector("html").classList.remove("hidden");
            setIsOpen(false);
        } else if (isOpen === false) {
            document.querySelector("html").classList.add("hidden");
            setIsOpen(true);
        }
    };

    const handleClick = (e) => {
        if (e && e.target.href.indexOf("#") !== -1) {
            e.preventDefault();
            const id = e.target.href.split("#")[1];
            if (document.querySelector("#" + id)) {
                const position = getCoords(document.querySelector("#" + id));
                if (window.innerWidth > 1170) {
                    window.scrollTo({
                        top: `${position.top - 100}`,
                        behavior: "smooth",
                    });
                } else {
                    window.scrollTo({
                        top: `${position.top - 70}`,
                        behavior: "smooth",
                    });
                }
            }
        }
        handleOverlay(false);
    };

    const handleDetails = (obj) => {
        document.querySelector("html").classList.add("hidden");
        dispatch(setDetailsContent(obj));
    };

    const handleFeedback = () => {
        document.querySelector("html").classList.add("hidden");
        dispatch(setFeedbackIsOpen(true));
    };

    return (
        <>
            <div
                className={
                    isOpen
                        ? "header__overlay header__overlay--active"
                        : "header__overlay"
                }
                onClick={() => handleOverlay(false)}
            ></div>
            <header ref={headerRef} className="header">
                <div ref={headerTopRef} className={"header-top"}>
                    <div
                        itemScope
                        itemType="https://schema.org/Organization"
                        className="header-top__container container"
                    >
                        <div className="header-top__social">
                            <a
                                href="https://ru-ru.facebook.com/"
                                className="header-top__social-item"
                            >
                                <Facebook fill="#646464" />
                            </a>
                        </div>
                        <div className="header-top__block header-top__block-1">
                            <Link href="mailto:admin@mail.ru">
                                <a
                                    itemProp="telephone"
                                    className="header-top__link"
                                >
                                    <Email fill="#646464" />
                                    {/* info@fudtrak-v-arendu.ru */}
                                    info@fud-trak77.ru
                                </a>
                            </Link>
                        </div>
                        <div
                            itemProp="address"
                            itemScope
                            itemType="https://schema.org/PostalAddress"
                            className="header-top__block header-top__block-2"
                        >
                            <a
                                itemProp="streetAddress"
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.google.ru/maps/place/%D0%BF%D1%80.+%D0%95%D0%B3%D0%BE%D1%80%D1%8C%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9,+2%D0%B0,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+109382/@55.6733545,37.7319352,17z/data=!3m1!4b1!4m5!3m4!1s0x414ab4680617c1fb:0x1d8eebb8559f46d7!8m2!3d55.6733515!4d37.7341239"
                                className="header-top__link"
                            >
                                <Marker fill="#646464" />
                                Егорьевский проезд, 2А
                            </a>
                        </div>
                        <div className="header-top__block header-top__block-3">
                            <button
                                onClick={() => handleFeedback()}
                                className="header-top__link"
                            >
                                Заказать звонок
                            </button>
                        </div>
                        <Link href="tel:89999999999">
                            <div className="header-top__block header-top__block-4">
                                <a
                                    itemProp="telephone"
                                    className="header-top__link header-top__tel"
                                >
                                    <Telephone fill="#646464" />8 999 999 99-99
                                </a>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom__container container">
                        <button
                            onClick={() => handleOverlay()}
                            className="header-bottom__burger"
                        >
                            {!isOpen ? <Burger /> : <BurgerClose />}
                            <a className="header-bottom__text header__desktop">
                                меню
                            </a>
                        </button>
                        <Link href="/">
                            <div
                                onClick={() => handleClick()}
                                className="header-bottom__logo-block"
                            >
                                <span className="header-bottom__text">
                                    фудтраки
                                </span>
                                <div className="header-bottom__logo">
                                    <Image
                                        src="/img/foodtruck-logo.svg"
                                        alt="foodtruck"
                                        layout="fill"
                                    />
                                </div>
                                <span className="header-bottom__text">
                                    в аренду
                                </span>
                            </div>
                        </Link>
                        <div className="header-bottom__buttons">
                            <button className="header-bottom__search header__desktop ">
                                {!isSearchOpen ? (
                                    <Search setIsSearchOpen={setIsSearchOpen} />
                                ) : (
                                    <div className="header-bottom__search-block">
                                        <input
                                            value={value}
                                            onChange={(e) =>
                                                setValue(e.target.value)
                                            }
                                            className="header-bottom__search-input"
                                        />
                                        <div
                                            className="header-bottom__search-close"
                                            onClick={() =>
                                                setIsSearchOpen(false)
                                            }
                                        >
                                            <BurgerClose fill="#888888" />
                                        </div>
                                        {value && (
                                            <div className="search">
                                                <h3 className="seacrh__result">
                                                    Результаты поиска:{" "}
                                                    <span>
                                                        {searchArr.reduce(
                                                            (sum, exactArr) =>
                                                                exactArr.filter(
                                                                    (item) =>
                                                                        item.caption
                                                                            .toLowerCase()
                                                                            .indexOf(
                                                                                value.toLowerCase()
                                                                            ) ===
                                                                        0
                                                                ).length + sum,
                                                            0
                                                        )}
                                                    </span>
                                                </h3>
                                                <ul className="search__list">
                                                    {searchArr.map((exactArr) =>
                                                        exactArr
                                                            .filter(
                                                                (item) =>
                                                                    item.caption
                                                                        .toLowerCase()
                                                                        .indexOf(
                                                                            value.toLowerCase()
                                                                        ) === 0
                                                            )
                                                            .map((result) => (
                                                                <li
                                                                    onClick={() =>
                                                                        handleDetails(
                                                                            result
                                                                        )
                                                                    }
                                                                    className="search__item"
                                                                    key={
                                                                        result.id
                                                                    }
                                                                >
                                                                    <div className="search__imgBlock">
                                                                        <Image
                                                                            width={
                                                                                75
                                                                            }
                                                                            height={
                                                                                50
                                                                            }
                                                                            src={
                                                                                result.imgSrc
                                                                            }
                                                                            alt="product"
                                                                        />
                                                                    </div>
                                                                    <p className="search__text">
                                                                        {
                                                                            result.caption
                                                                        }
                                                                    </p>
                                                                </li>
                                                            ))
                                                    )}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </button>
                            <Link href={FAVORITES_ROUTE}>
                                <a
                                    onClick={() => handleClick()}
                                    className="header-bottom__favorites header__desktop"
                                >
                                    <Favorites />
                                    {liked?.length > 0 && (
                                        <div className="header-bottom__circle">
                                            {liked.reduce(
                                                (sum, item) => sum + 1,
                                                0
                                            )}
                                        </div>
                                    )}
                                </a>
                            </Link>
                            <Link href={BUCKET_ROUTE}>
                                <a
                                    onClick={() => handleClick()}
                                    className="header-bottom__cart"
                                >
                                    <Cart />
                                    {bucketCollection?.length > 0 && (
                                        <div className="header-bottom__circle">
                                            {bucketCollection.reduce(
                                                (sum, item) =>
                                                    sum + item.quantity,
                                                0
                                            )}
                                        </div>
                                    )}
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    className={
                        isOpen
                            ? "header-outter header-outter--active"
                            : "header-outter"
                    }
                >
                    <div className="header-outter__container">
                        <div className="header-outter__top header-tablet">
                            <div className="header-outter__search-block">
                                <input
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    className="header-outter__search-input"
                                    placeholder="Поиск по сайту"
                                />
                                {value ? (
                                    <button onClick={() => setValue("")}>
                                        <Image
                                            width={24}
                                            height={24}
                                            alt="close"
                                            src="/img/delete.svg"
                                        />
                                    </button>
                                ) : (
                                    <Search />
                                )}

                                {value && (
                                    <div className="search">
                                        <h3 className="seacrh__result">
                                            Результаты поиска:{" "}
                                            <span>
                                                {searchArr.reduce(
                                                    (sum, exactArr) =>
                                                        exactArr.filter(
                                                            (item) =>
                                                                item.caption
                                                                    .toLowerCase()
                                                                    .indexOf(
                                                                        value.toLowerCase()
                                                                    ) === 0
                                                        ).length + sum,
                                                    0
                                                )}
                                            </span>
                                        </h3>
                                        <ul className="search__list">
                                            {searchArr.map((exactArr) =>
                                                exactArr
                                                    .filter(
                                                        (item) =>
                                                            item.caption
                                                                .toLowerCase()
                                                                .indexOf(
                                                                    value.toLowerCase()
                                                                ) === 0
                                                    )
                                                    .map((result) => (
                                                        <li
                                                            onClick={() =>
                                                                handleDetails(
                                                                    result
                                                                )
                                                            }
                                                            className="search__item"
                                                            key={result.id}
                                                        >
                                                            <div className="search__imgBlock">
                                                                <Image
                                                                    width={75}
                                                                    height={50}
                                                                    src={
                                                                        result.imgSrc
                                                                    }
                                                                    alt="product"
                                                                />
                                                            </div>
                                                            <p className="search__text">
                                                                {result.caption}
                                                            </p>
                                                        </li>
                                                    ))
                                            )}
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div className="header-outter__favorites-block">
                                <Link href={FAVORITES_ROUTE}>
                                    <a
                                        onClick={() => handleClick()}
                                        className="header-outter__favorites"
                                    >
                                        <span>Избранные</span>
                                        <Favorites />
                                        {liked?.length > 0 && (
                                            <div className="header-outter__circle">
                                                {liked.reduce(
                                                    (sum) => sum + 1,
                                                    0
                                                )}
                                            </div>
                                        )}
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <nav className="header-outter__nav nav container">
                            <ul
                                itemScope
                                itemType="http://schema.org/SiteNavigationElement"
                                className="nav__list"
                            >
                                {navLinks.map((link) => (
                                    <li className="nav__item" key={link.text}>
                                        <Link key={link.text} href={link.href}>
                                            <a
                                                itemProp="url"
                                                onClick={() => handleClick()}
                                                className="nav__link"
                                            >
                                                {link.Component}
                                                {link.text}
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <ul
                                itemScope
                                itemType="http://schema.org/SiteNavigationElement"
                                className="nav__block"
                            >
                                <li>
                                    <Link href={EVENTS_ROUTE}>
                                        <a
                                            itemProp="url"
                                            onClick={() => handleClick()}
                                            className="nav__link"
                                        >
                                            Мероприятия
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        itemProp="url"
                                        className="nav__link"
                                        onClick={(e) => handleClick(e)}
                                        href="#faq"
                                    >
                                        Вопросы и ответы
                                    </a>
                                </li>
                                <li>
                                    <Link href={CONTACTS_ROUTE}>
                                        <a
                                            onClick={() => handleClick()}
                                            itemProp="url"
                                            className="nav__link"
                                        >
                                            Контакты
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                            <Link href="tel:89999999999">
                                <div className="nav__tel-block">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M13.0334 11.256L14.6432 12.6727C15.3483 13.2931 15.3278 14.4217 14.5276 14.9134C13.4129 15.5984 12.3309 15.9595 10.8123 15.9968C10.6361 16.0011 10.4596 15.9693 10.2952 15.9059C4.81718 13.7942 1.64407 9.15221 0.145342 5.67912C0.0477347 5.45293 0.0103753 5.20416 0.0472117 4.96057C0.313415 3.20028 1.138 1.83218 1.89808 0.948546C2.40948 0.354024 3.29272 0.468875 3.78931 1.07582L4.94882 2.493C5.4409 3.09443 5.40814 3.98965 4.95051 4.61768C4.77627 4.85679 4.58375 5.13374 4.37762 5.44852C4.13292 5.82221 4.07419 6.29373 4.27092 6.69476C5.24673 8.68394 7.4309 10.4438 8.86062 11.3701C9.23146 11.6104 9.69392 11.6456 10.1088 11.4934L11.526 10.9738C12.0422 10.7845 12.6206 10.8928 13.0334 11.256Z"
                                            fill="#BDBDBD"
                                        />
                                    </svg>
                                    <a className="nav__tel">8 999 999 99-99</a>
                                </div>
                            </Link>
                        </nav>
                        <div className="header-outter__bottom header-tablet">
                            <a
                                href="mailto:admin@mail.ru"
                                className="header-outter__link-1"
                            >
                                <Email fill="#646464" />
                                info@fudtrak-v-arendu.ru
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.google.ru/maps/place/%D0%BF%D1%80.+%D0%95%D0%B3%D0%BE%D1%80%D1%8C%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9,+2%D0%B0,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+109382/@55.6733545,37.7319352,17z/data=!3m1!4b1!4m5!3m4!1s0x414ab4680617c1fb:0x1d8eebb8559f46d7!8m2!3d55.6733515!4d37.7341239"
                                className="header-outter__link-1"
                            >
                                <Marker fill="#646464" />
                                Егорьевский проезд, 2А
                            </a>
                            <div className="header-outter__flex">
                                <a href="#">
                                    <Facebook fill="#646464" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
