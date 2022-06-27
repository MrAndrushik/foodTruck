import Image from "next/image";
import Link from "next/link";
import { setDetailsContent } from "../../redux/toolkitSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, incrQuantity, decrQuantity } from "../../redux/bucket";

import React from "react";

import styles from "../../styles/modules/Card.module.scss";

const Card = ({ obj, bucket, link }) => {
    const { caption, imgSrc, id, startPrice1, startPrice2 } = obj;
    const dispatch = useDispatch();
    const bucketCollection = useSelector((state) => state.bucket.collection);
    const currentCardInBucket = bucketCollection.filter(
        (bucket) => bucket.id === obj.id
    )[0];

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
            <div itemProp="image" className={styles.imgBlock}>
                <Image src={imgSrc} alt="catalog-item" layout="fill" />
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
                        ОТ <span itemProp="price">{startPrice1}</span>{" "}
                        <span itemProp="priceCurrency" content="RUB">
                            ₽
                        </span>
                    </p>
                    <span>Первые сутки</span>
                </div>
                <div className={styles.priceItem}>
                    <p className={styles.price}>
                        ОТ <span itemProp="price">{startPrice2}</span>{" "}
                        <span itemProp="priceCurrency" content="RUB">
                            ₽
                        </span>
                    </p>
                    <span>Вторые сутки</span>
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
                                dispatch(decrQuantity(currentCardInBucket))
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
                                dispatch(incrQuantity(currentCardInBucket))
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
        </li>
    );
};

export default Card;
