import Link from "next/link";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useState } from "react";

import styles from "../../styles/modules/FeedbackModal.module.scss";
import { setFeedbackIsOpen } from "../../redux/toolkitSlice";
import { sendEmail } from "../../lib/helpers";

const FeedbackModal = ({ type }) => {
    const isFeedbackOpen = useSelector((state) => state.toolkit.feedbackIsOpen);

    const bucket = useSelector((state) => state.bucket);
    const bucketCollection = bucket.collection;
    const period = bucket.period;

    const [selectValue, setSelectValue] = useState("Позвонить по телефону");
    const [selectIsOpen, setSelectIsOpen] = useState(false);
    const dispatch = useDispatch();

    const calcItemTotal = (item) => {
        if (period === 1) {
            const total =
                Number(item.startPrice1.split(" ").join("")) * item.quantity;
            return total;
        } else {
            const total =
                Number(item.startPrice1.split(" ").join("")) * item.quantity +
                Number(item.startPrice2.split(" ").join("")) *
                    item.quantity *
                    (period - 1);
            return total;
        }
    };

    const variants = [
        "Позвонить по телефону",
        "Связаться по WhatsApp",
        "Связаться по Telegram",
    ];

    const handleClose = () => {
        document.querySelector("html").classList.remove("hidden");
        dispatch(setFeedbackIsOpen(false));
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const dataWithBucket = Object.assign(data, {
            bucket: bucketCollection,
            period: period,
        });
        sendEmail({ data: dataWithBucket });
    };

    return (
        <div
            className={
                isFeedbackOpen
                    ? `${styles.overflow} ${styles.overflowActive}`
                    : `${styles.overflow}`
            }
        >
            <div
                className={
                    isFeedbackOpen
                        ? `${styles.modal} ${styles.modalActive}`
                        : `${styles.modal}`
                }
            >
                <button onClick={() => handleClose()} className={styles.close}>
                    <Image
                        src="/img/modal-close.svg"
                        alt="Close"
                        width={42}
                        height={35}
                    />
                </button>
                <h2 className={`${styles.title} stn-title`}>
                    {type === "bucket" ? "Ваш заказ" : "Оставьте заявку"}
                </h2>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    {type === "bucket" && (
                        <ul className={styles.wrapper}>
                            {bucketCollection.map((item) => (
                                <li key={item.id} className={styles.item}>
                                    <h4 className={styles.bucketCaption}>
                                        {item.caption}
                                    </h4>
                                    <div className={styles.currentBlock}>
                                        <span className={styles.currentTotal}>
                                            {`${calcItemTotal(item)} ₽`}
                                        </span>
                                        <p className={styles.notice}>
                                            {`х${item.quantity} за ${period} сутки`}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                    <label className={styles.label}>
                        Ваш телефон
                        <input
                            className={styles.input}
                            type="phone"
                            placeholder="+7 999 999 999"
                            {...register("phone", {
                                required: "Обязательное поле",
                                pattern: {
                                    value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
                                    message: "Введите корректный номер",
                                },
                            })}
                        />
                        {errors.phone?.message && (
                            <span className={styles.error}>
                                {errors.phone?.message}
                            </span>
                        )}
                    </label>
                    <label className={`${styles.label}`}>
                        Способ связи
                        <div className={styles.relative}>
                            <input
                                onClick={() => setSelectIsOpen(!selectIsOpen)}
                                type="text"
                                className={`${styles.input} ${styles.select}`}
                                value={selectValue}
                                readOnly
                                {...register("connection", {
                                    required: "Обязательное поле",
                                })}
                            />
                            {selectIsOpen && (
                                <ul className={styles.list}>
                                    {variants.map((variant, index) => (
                                        <li
                                            className={
                                                variant === selectValue
                                                    ? `${styles.variant}`
                                                    : `${styles.variant}`
                                            }
                                            key={index}
                                            onClick={() =>
                                                setSelectValue(variant)
                                            }
                                        >
                                            {variant}
                                            {variant === selectValue && (
                                                <Image
                                                    src="/img/checked.svg"
                                                    width="16"
                                                    height="16"
                                                    alt="checked"
                                                />
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        {errors.connection?.message && (
                            <span className={styles.error}>
                                {errors.connection?.message}
                            </span>
                        )}
                    </label>
                    <input
                        value="Отправить заявку"
                        className={styles.submit}
                        type="submit"
                    />
                    <p className={styles.descr}>
                        Отправляя заявку вы соглашаетесь с{" "}
                        <Link href="/privacy">
                            <a className={styles.link}>
                                Политикой конфидицеальности
                            </a>
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default FeedbackModal;
