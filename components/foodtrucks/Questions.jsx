import { useState, useRef } from "react";
import data from "../../public/data/foodtrucks/questions.json";

import styles from "../../styles/foodtrucks/Questions.module.scss";

const Questions = () => {
    const DropdownItem = ({ title, body }) => {
        const [isOpen, setIsOpen] = useState(false);
        const ref = useRef(null);

        const handleFunc = () => {
            setIsOpen(!isOpen);
            if (!isOpen) {
                ref.current.style.maxHeight = ref.current.scrollHeight + "px";
            } else {
                ref.current.style.maxHeight = null;
            }
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
                    <h3 className={styles.caption}>{title}</h3>
                    <svg
                        width="30"
                        height="17"
                        viewBox="0 0 30 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.5607 13.4393L3.12132 0L0 2.12132L14.5607 16.682L29.1213 2.12132L26 0L14.5607 13.4393Z"
                            fill="#646464"
                        />
                    </svg>
                </div>
                <div
                    ref={ref}
                    className={
                        isOpen
                            ? `${styles.bottom} ${styles.bottomActive}`
                            : `${styles.bottom}`
                    }
                >
                    <p className={styles.text}>{body}</p>
                </div>
            </div>
        );
    };

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.wrapper}>
                    {data.map(({ title, body }, index) => (
                        <DropdownItem title={title} body={body} key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Questions;
