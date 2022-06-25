import styles from "../../styles/modules/Bucket.module.scss";

import { useDispatch, useSelector } from "react-redux";
import {
    incrQuantity,
    decrQuantity,
    incPeriod,
    decrPeriod,
    clearBucket,
    deleteProduct,
} from "../../redux/bucket";

import { setFeedbackIsOpen } from "../../redux/toolkitSlice";

import Image from "next/image";

const Bucket = () => {
    const calcItemTotal = (item) => {
        const total = 0;
        if (period === 1) {
            total =
                Number(item.startPrice1.split(" ").join("")) * item.quantity;
        } else {
            total =
                Number(item.startPrice1.split(" ").join("")) * item.quantity +
                Number(item.startPrice2.split(" ").join("")) *
                    item.quantity *
                    (period - 1);
        }
        return total;
    };

    const handleOpen = () => {
        document.querySelector("html").classList.remove("hidden");
        dispatch(setFeedbackIsOpen(true));
    };

    const bucket = useSelector((state) => state.bucket);
    const bucketCollection = bucket.collection;
    const period = bucket.period;
    const totalPrice = bucketCollection.reduce(
        (sum, item) => sum + calcItemTotal(item),
        0
    );
    const totalQuantity = bucketCollection.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    const declOfNum = (num) => {
        const textForms = ["день", "дня", "дней"];
        num = Math.abs(num) % 100;
        const n = num % 10;
        if (num > 10 && num < 20) {
            return textForms[2];
        }
        if (n > 1 && n < 5) {
            return textForms[1];
        }
        if (n == 1) {
            return textForms[0];
        }
        return textForms[2];
    };

    const dispatch = useDispatch();

    return (
        <section className={styles.section}>
            <div className={`${styles.container} container`}>
                <h1 className={styles.title}>Корзина</h1>
                {bucketCollection?.length > 0 ? (
                    <>
                        <div className={styles.topBtn}>
                            <button onClick={() => dispatch(clearBucket())}>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12.25 2C13.0801 1.99995 13.8788 2.31755 14.4822 2.88767C15.0856 3.45779 15.448 4.23719 15.495 5.066L15.5 5.25H20.75C20.94 5.25006 21.1229 5.32224 21.2618 5.45197C21.4006 5.5817 21.4851 5.7593 21.498 5.94888C21.511 6.13846 21.4515 6.32589 21.3316 6.4733C21.2117 6.62071 21.0402 6.7171 20.852 6.743L20.75 6.75H19.954L18.674 19.77C18.6099 20.4191 18.3171 21.0243 17.848 21.4775C17.3789 21.9306 16.7639 22.2023 16.113 22.244L15.937 22.25H8.563C7.91046 22.25 7.27919 22.0179 6.78201 21.5953C6.28482 21.1727 5.95412 20.587 5.849 19.943L5.826 19.769L4.545 6.75H3.75C3.56876 6.74999 3.39366 6.68436 3.25707 6.56523C3.12048 6.44611 3.03165 6.28155 3.007 6.102L3 6C3.00001 5.81876 3.06564 5.64366 3.18477 5.50707C3.30389 5.37048 3.46845 5.28165 3.648 5.257L3.75 5.25H9C9 4.38805 9.34241 3.5614 9.9519 2.9519C10.5614 2.34241 11.388 2 12.25 2ZM18.447 6.75H6.052L7.319 19.622C7.34705 19.9092 7.47362 20.1779 7.67722 20.3824C7.88082 20.5869 8.14892 20.7147 8.436 20.744L8.563 20.75H15.937C16.537 20.75 17.046 20.325 17.162 19.748L17.182 19.622L18.446 6.75H18.447ZM14 9.5C14.1812 9.50001 14.3563 9.56564 14.4929 9.68477C14.6295 9.80389 14.7184 9.96845 14.743 10.148L14.75 10.25V17.25C14.7499 17.44 14.6778 17.6229 14.548 17.7618C14.4183 17.9006 14.2407 17.9851 14.0511 17.998C13.8615 18.011 13.6741 17.9515 13.5267 17.8316C13.3793 17.7117 13.2829 17.5402 13.257 17.352L13.25 17.25V10.25C13.25 10.0511 13.329 9.86032 13.4697 9.71967C13.6103 9.57902 13.8011 9.5 14 9.5ZM10.5 9.5C10.6812 9.50001 10.8563 9.56564 10.9929 9.68477C11.1295 9.80389 11.2184 9.96845 11.243 10.148L11.25 10.25V17.25C11.2499 17.44 11.1778 17.6229 11.048 17.7618C10.9183 17.9006 10.7407 17.9851 10.5511 17.998C10.3615 18.011 10.1741 17.9515 10.0267 17.8316C9.87929 17.7117 9.7829 17.5402 9.757 17.352L9.75 17.25V10.25C9.75 10.0511 9.82902 9.86032 9.96967 9.71967C10.1103 9.57902 10.3011 9.5 10.5 9.5ZM12.25 3.5C11.8108 3.50002 11.3877 3.66517 11.0646 3.96268C10.7415 4.26019 10.5421 4.6683 10.506 5.106L10.5 5.25H14C14 4.78587 13.8156 4.34075 13.4874 4.01256C13.1592 3.68437 12.7141 3.5 12.25 3.5Z"
                                        fill="#646464"
                                    />
                                </svg>
                                Очистить корзину
                            </button>
                        </div>
                        <div className={styles.wrapper}>
                            <div className={styles.column}>
                                {bucketCollection.map((item) => (
                                    <div key={item.id} className={styles.block}>
                                        <button
                                            onClick={() =>
                                                dispatch(deleteProduct(item))
                                            }
                                            className={styles.closeBtn}
                                        >
                                            <svg
                                                width="24"
                                                height="21"
                                                viewBox="0 0 24 21"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M1.93041 5.39754L5.10205 0.242929C5.27221 -0.0336082 5.65939 -0.0831636 5.89032 0.142039L11.7256 5.83262L18.2761 0.567804C18.4384 0.437333 18.6666 0.418359 18.8492 0.520138L23.7331 3.24173C24.0359 3.41046 24.0772 3.82023 23.8138 4.04317L16.3607 10.3529L21.7802 15.638C21.929 15.7831 21.9691 16.0047 21.881 16.1938L20.227 19.7417C20.0886 20.0385 19.7034 20.1295 19.4481 19.9258L12.0375 14.0129L5.7837 19.3073C5.60695 19.457 5.34805 19.4689 5.15759 19.3363L0.211996 15.8913C-0.0587731 15.7027 -0.0725038 15.315 0.184276 15.1086L6.77344 9.81273L2.04059 6.03643C1.84689 5.88187 1.79993 5.6096 1.93041 5.39754Z"
                                                    fill="#BDBDBD"
                                                />
                                            </svg>
                                        </button>
                                        <div className={styles.imgBlock}>
                                            <Image
                                                width={173}
                                                height={165}
                                                src={item.imgSrc}
                                                alt="goods"
                                                layout="responsive"
                                                objectFit="cover"
                                            />
                                        </div>
                                        <div className={styles.content}>
                                            <h3 className={styles.caption}>
                                                {item.caption}
                                            </h3>
                                            <div className={styles.flex}>
                                                <div>
                                                    <div
                                                        className={
                                                            styles.priceBlock
                                                        }
                                                    >
                                                        <p
                                                            className={
                                                                styles.price
                                                            }
                                                        >
                                                            <span>
                                                                {`${item.startPrice1} ₽`}
                                                            </span>
                                                            Первые сутки
                                                        </p>
                                                        <p
                                                            className={
                                                                styles.price
                                                            }
                                                        >
                                                            <span>
                                                                {`${item.startPrice2} ₽`}
                                                            </span>
                                                            Вторые сутки
                                                        </p>
                                                    </div>
                                                    <div
                                                        className={
                                                            styles.currentBlock
                                                        }
                                                    >
                                                        <span
                                                            className={
                                                                styles.currentTotal
                                                            }
                                                        >
                                                            {`${calcItemTotal(
                                                                item
                                                            ).toLocaleString()} ₽`}
                                                        </span>
                                                        <p
                                                            className={
                                                                styles.notice
                                                            }
                                                        >
                                                            {`х${
                                                                item.quantity
                                                            } за ${period} ${declOfNum(
                                                                period
                                                            )}`}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div
                                                    className={styles.flexType}
                                                >
                                                    <p
                                                        className={
                                                            styles.foodtruckType
                                                        }
                                                    >
                                                        {item.activeTariff &&
                                                            item.tariffs.filter(
                                                                (tariff) =>
                                                                    tariff.id ===
                                                                    item.activeTariff
                                                            )[0].caption}
                                                    </p>
                                                    <div
                                                        className={
                                                            styles.quantityFlex
                                                        }
                                                    >
                                                        <p
                                                            className={
                                                                styles.quantity
                                                            }
                                                        >
                                                            Количество
                                                        </p>
                                                        <div
                                                            className={
                                                                styles.quantityBlock
                                                            }
                                                        >
                                                            <button
                                                                onClick={() =>
                                                                    dispatch(
                                                                        decrQuantity(
                                                                            item
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
                                                                        fill="#DEDEDE"
                                                                    />
                                                                </svg>
                                                            </button>
                                                            <span>
                                                                {item.quantity}
                                                            </span>
                                                            <button
                                                                onClick={() =>
                                                                    dispatch(
                                                                        incrQuantity(
                                                                            item
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
                                                                        fill="#DEDEDE"
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <aside className={styles.aside}>
                                <div className={styles.asideWrapper}>
                                    <div className={styles.totalBlock}>
                                        <h4 className={styles.asideCaption}>
                                            Итого:
                                        </h4>
                                        <span>{`${totalPrice.toLocaleString()} ₽`}</span>
                                    </div>
                                    <div className={styles.totalBlock}>
                                        <h4 className={styles.asideCaption}>
                                            Товаров:
                                        </h4>
                                        <span>{totalQuantity}</span>
                                    </div>
                                    <div className={styles.timeBlock}>
                                        <h4 className={styles.asideCaption}>
                                            Выберите время аренды
                                        </h4>
                                        <div
                                            className={
                                                styles.quantityBlockTotal
                                            }
                                        >
                                            <button
                                                onClick={() =>
                                                    dispatch(decrPeriod())
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
                                                        fill="#DEDEDE"
                                                    />
                                                </svg>
                                            </button>
                                            <span>
                                                {`${period} ${declOfNum(
                                                    period
                                                )}`}
                                            </span>
                                            <button
                                                onClick={() =>
                                                    dispatch(incPeriod())
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
                                                        fill="#DEDEDE"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className={styles.btnBlock}>
                                        <button
                                            onClick={() => handleOpen()}
                                            className={styles.btn}
                                        >
                                            Оформить заказ
                                        </button>
                                        <p
                                            className={`${styles.asideNotice} ${styles.tablet}`}
                                        >
                                            Стоимость доставки обсуждается
                                            отдельно с менеджером
                                        </p>
                                    </div>
                                </div>
                                <p
                                    className={`${styles.asideNotice} ${styles.desktop}`}
                                >
                                    Стоимость доставки обсуждается отдельно с
                                    менеджером
                                </p>
                            </aside>
                        </div>
                    </>
                ) : (
                    <h2 className="stn-title">Ваша корзина пуста</h2>
                )}
            </div>
        </section>
    );
};

export default Bucket;
