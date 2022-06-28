import Image from "next/image";
import Link from "next/link";
import { setDetailsContent } from "../../redux/toolkitSlice";
import { useDispatch, useSelector } from "react-redux";
import {
    addToCart,
    incrQuantity,
    decrQuantity,
    toggleToLiked,
} from "../../redux/bucket";

import React from "react";

import styles from "../../styles/modules/Card.module.scss";

const Card = ({ obj, bucket, link }) => {
    const { caption, imgSrc, id, startPrice1, startPrice2 } = obj;
    const dispatch = useDispatch();
    const bucketCollection = useSelector((state) => state.bucket.collection);
    const currentCardInBucket = bucketCollection.filter(
        (bucket) => bucket.id === obj.id
    )[0];
    const liked = useSelector((state) => state.bucket.liked);
    const currentCardInLiked = liked.filter((item) => item.id === obj.id)[0];

    const handleDetails = (obj) => {
        document.querySelector("html").classList.add("hidden");
        dispatch(setDetailsContent(obj));
    };

    return (
        <li
            itemProp="itemListElement"
            itemType="http://schema.org/Product"
            className={styles.block}
        >
            <button
                className={styles.favorite}
                onClick={() => dispatch(toggleToLiked(obj))}
            >
                {!currentCardInLiked ? (
                    <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.5002 19.7502C9.8283 19.1306 9.06892 18.486 8.2658 17.8002H8.25538C5.42726 15.3952 2.22205 12.6739 0.806425 9.41307C0.341841 8.37524 0.0949664 7.24641 0.083508 6.10024C0.0819646 5.32239 0.229874 4.55205 0.518552 3.83447C0.80723 3.11689 1.23086 2.46653 1.76456 1.92157C2.29826 1.37661 2.93128 0.948049 3.62644 0.66104C4.3216 0.374031 5.06489 0.234364 5.81267 0.25024C7.04249 0.25226 8.24584 0.621911 9.27934 1.31516C9.73347 1.62171 10.1444 1.99252 10.5002 2.41691C10.8585 1.99441 11.2689 1.62391 11.722 1.31516C12.7551 0.621774 13.9582 0.252102 15.1877 0.25024C15.9355 0.234364 16.6787 0.374031 17.3739 0.66104C18.0691 0.948049 18.7021 1.37661 19.2358 1.92157C19.7695 2.46653 20.1931 3.11689 20.4818 3.83447C20.7705 4.55205 20.9184 5.32239 20.9168 6.10024C20.9062 7.24729 20.6597 8.3787 20.1939 9.41849C18.7783 12.6793 15.5741 15.3996 12.746 17.8002L12.7356 17.8089C11.9314 18.4903 11.1731 19.1349 10.5012 19.7589L10.5002 19.7502ZM5.81267 2.41691C4.84237 2.40428 3.9065 2.79049 3.20851 3.49157C2.87565 3.83161 2.61191 4.23776 2.43296 4.6859C2.25402 5.13404 2.16352 5.61501 2.16684 6.10024C2.1783 6.93441 2.36059 7.75774 2.70017 8.51391C3.36843 9.92083 4.2701 11.1941 5.36372 12.2752C6.39601 13.3586 7.58351 14.4072 8.61059 15.2891C8.89497 15.5328 9.18455 15.7787 9.47413 16.0247L9.65642 16.1796C9.93455 16.4157 10.222 16.6606 10.5002 16.9011L10.5137 16.8881L10.52 16.8827H10.5262L10.5356 16.8751H10.546L10.5648 16.8588L10.6075 16.8231L10.6148 16.8166L10.6262 16.8079H10.6325L10.6418 16.7992L11.3335 16.2088L11.5148 16.0539C11.8075 15.8058 12.097 15.5599 12.3814 15.3162C13.4085 14.4343 14.597 13.3867 15.6293 12.298C16.7232 11.2175 17.6249 9.94449 18.2929 8.53774C18.6387 7.77507 18.8241 6.94307 18.8345 6.10024C18.8366 5.6164 18.7453 5.13704 18.5662 4.69048C18.3871 4.24392 18.1238 3.8392 17.7918 3.50024C17.0952 2.79599 16.1592 2.4066 15.1877 2.41691C14.6016 2.41173 14.021 2.5356 13.4842 2.78038C12.9474 3.02516 12.4665 3.38531 12.0731 3.83716L10.5002 5.72216L8.92726 3.83716C8.53383 3.38531 8.05291 3.02516 7.51611 2.78038C6.97931 2.5356 6.39878 2.41173 5.81267 2.41691Z"
                            fill="#BDBDBD"
                        />
                    </svg>
                ) : (
                    <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.5002 19.7502C9.8283 19.1306 9.06892 18.486 8.2658 17.8002H8.25538C5.42726 15.3952 2.22205 12.6739 0.806425 9.41307C0.341841 8.37524 0.0949664 7.24641 0.083508 6.10024C0.0819646 5.32239 0.229874 4.55205 0.518552 3.83447C0.80723 3.11689 1.23086 2.46653 1.76456 1.92157C2.29826 1.37661 2.93128 0.948049 3.62644 0.66104C4.3216 0.374031 5.06489 0.234364 5.81267 0.25024C7.04249 0.25226 8.24584 0.621911 9.27934 1.31516C9.73347 1.62171 10.1444 1.99252 10.5002 2.41691C10.8585 1.99441 11.2689 1.62391 11.722 1.31516C12.7551 0.621774 13.9582 0.252102 15.1877 0.25024C15.9355 0.234364 16.6787 0.374031 17.3739 0.66104C18.0691 0.948049 18.7021 1.37661 19.2358 1.92157C19.7695 2.46653 20.1931 3.11689 20.4818 3.83447C20.7705 4.55205 20.9184 5.32239 20.9168 6.10024C20.9062 7.24729 20.6597 8.3787 20.1939 9.41849C18.7783 12.6793 15.5741 15.3996 12.746 17.8002L12.7356 17.8089C11.9314 18.4903 11.1731 19.1349 10.5012 19.7589L10.5002 19.7502Z"
                            fill="#E42323"
                        />
                    </svg>
                )}
            </button>
            {link ? (
                <>
                    <Link href={`/foodtrucks/` + id}>
                        <a>
                            {currentCardInBucket && (
                                <div className={styles.selected}>
                                    <Image
                                        alt="selected"
                                        src="/img/checked.svg"
                                        width="36"
                                        height="36"
                                    />
                                </div>
                            )}
                            <div itemProp="image" className={styles.imgBlock}>
                                <Image
                                    src={imgSrc}
                                    alt="catalog-item"
                                    layout="fill"
                                />
                            </div>
                            <div className={styles.titleBlock}>
                                <h3 itemProp="name" className={styles.caption}>
                                    {caption}
                                </h3>
                            </div>
                            <div
                                itemProp="offers"
                                itemScope
                                itemType="http://schema.org/Offer"
                                className={styles.priceBlock}
                            >
                                <div className={styles.priceItem}>
                                    <p className={styles.price}>
                                        ОТ{" "}
                                        <span itemProp="price">
                                            {startPrice1}
                                        </span>{" "}
                                        <span
                                            itemProp="priceCurrency"
                                            content="RUB"
                                        >
                                            ₽
                                        </span>
                                    </p>
                                    <span>Первые сутки</span>
                                </div>
                                <div className={styles.priceItem}>
                                    <p className={styles.price}>
                                        ОТ{" "}
                                        <span itemProp="price">
                                            {startPrice2}
                                        </span>{" "}
                                        <span
                                            itemProp="priceCurrency"
                                            content="RUB"
                                        >
                                            ₽
                                        </span>
                                    </p>
                                    <span>Вторые сутки</span>
                                </div>
                            </div>
                        </a>
                    </Link>
                    <div className={styles.buttonBlock}>
                        {link ? (
                            <Link href={`/foodtrucks/` + id}>
                                <a className={styles.btn}>Подробнее</a>
                            </Link>
                        ) : (
                            <button
                                onClick={() => handleDetails(obj)}
                                className={styles.btn}
                            >
                                Подробнее
                            </button>
                        )}
                        {bucket && !currentCardInBucket && (
                            <button
                                onClick={() => dispatch(addToCart(obj))}
                                className={styles.bucketBtn}
                            >
                                + Добавить
                            </button>
                        )}
                        {currentCardInBucket && (
                            <div className={styles.quantityBlock}>
                                <button
                                    onClick={() =>
                                        dispatch(
                                            decrQuantity(currentCardInBucket)
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
                                <span>{currentCardInBucket.quantity}</span>
                                <button
                                    onClick={() =>
                                        dispatch(
                                            incrQuantity(currentCardInBucket)
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
                </>
            ) : (
                <>
                    <div
                        className={styles.pointer}
                        onClick={() => handleDetails(obj)}
                    >
                        {currentCardInBucket && (
                            <div className={styles.selected}>
                                <Image
                                    alt="selected"
                                    src="/img/checked.svg"
                                    width="36"
                                    height="36"
                                />
                            </div>
                        )}
                        <div itemProp="image" className={styles.imgBlock}>
                            <Image
                                src={imgSrc}
                                alt="catalog-item"
                                layout="fill"
                            />
                        </div>
                        <div className={styles.titleBlock}>
                            <h3 itemProp="name" className={styles.caption}>
                                {caption}
                            </h3>
                        </div>
                        <div
                            itemProp="offers"
                            itemScope
                            itemType="http://schema.org/Offer"
                            className={styles.priceBlock}
                        >
                            <div className={styles.priceItem}>
                                <p className={styles.price}>
                                    ОТ{" "}
                                    <span itemProp="price">{startPrice1}</span>{" "}
                                    <span
                                        itemProp="priceCurrency"
                                        content="RUB"
                                    >
                                        ₽
                                    </span>
                                </p>
                                <span>Первые сутки</span>
                            </div>
                            <div className={styles.priceItem}>
                                <p className={styles.price}>
                                    ОТ{" "}
                                    <span itemProp="price">{startPrice2}</span>{" "}
                                    <span
                                        itemProp="priceCurrency"
                                        content="RUB"
                                    >
                                        ₽
                                    </span>
                                </p>
                                <span>Вторые сутки</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.buttonBlock}>
                        {link ? (
                            <Link href={`/foodtrucks/` + id}>
                                <a className={styles.btn}>Подробнее</a>
                            </Link>
                        ) : (
                            <button
                                onClick={() => handleDetails(obj)}
                                className={styles.btn}
                            >
                                Подробнее
                            </button>
                        )}
                        {bucket && !currentCardInBucket && (
                            <button
                                onClick={() => dispatch(addToCart(obj))}
                                className={styles.bucketBtn}
                            >
                                + Добавить
                            </button>
                        )}
                        {currentCardInBucket && (
                            <div className={styles.quantityBlock}>
                                <button
                                    onClick={() =>
                                        dispatch(
                                            decrQuantity(currentCardInBucket)
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
                                <span>{currentCardInBucket.quantity}</span>
                                <button
                                    onClick={() =>
                                        dispatch(
                                            incrQuantity(currentCardInBucket)
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
                </>
            )}
        </li>
    );
};

export default Card;
