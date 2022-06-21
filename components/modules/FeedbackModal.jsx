import Link from "next/link";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useState } from "react";

import styles from "../../styles/modules/FeedbackModal.module.scss";
import { setFeedbackIsOpen } from "../../redux/toolkitSlice";

const FeedbackModal = () => {
    const isFeedbackOpen = useSelector((state) => state.toolkit.feedbackIsOpen);
    const [selectValue, setSelectValue] = useState("Позвонить по телефону");
    const [selectIsOpen, setSelectIsOpen] = useState(false);
    const dispatch = useDispatch();

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

    const onSubmit = (data) => {
        console.log(data);
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
                <h2 className={styles.title}>Оставьте заявку</h2>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <label className={styles.label}>
                        Ваш телефон
                        <input
                            className={styles.input}
                            type="tel"
                            placeholder="+7 999 999 999"
                            {...register("tel", {
                                required: "Обязательное поле",
                                pattern: {
                                    value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
                                    message: "Введите корректный номер",
                                },
                            })}
                        />
                        {errors.tel?.message && (
                            <span className={styles.error}>
                                {errors.tel?.message}
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
