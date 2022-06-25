import Image from "next/image";
import styles from "../../styles/modules/Feedback.module.scss";

import { setFeedbackIsOpen } from "../../redux/toolkitSlice";
import { useDispatch } from "react-redux";

const Feedback = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        // const padding =
        //     window.innerWidth - document.documentElement.clientWidth;
        document.querySelector("html").classList.add("hidden");
        dispatch(setFeedbackIsOpen(true));
    };

    return (
        <section className={styles.section}>
            <div className={`${styles.container} container`}>
                <div className={styles.content}>
                    <h2 className={`${styles.title} stn-title`}>
                        Не нашли что искали?
                    </h2>
                    <p className={styles.descr}>
                        Оставьте заявку и наш менеджер сможет вам предложить и
                        рассказать о индивидуальном предложении по организации
                        питания
                    </p>
                    <button
                        onClick={() => handleClick()}
                        className={styles.button}
                    >
                        Оставить заявку
                    </button>
                </div>
                <Image
                    src="/img/feedback.png"
                    width={580}
                    height={314}
                    alt="Feedback"
                />
            </div>
        </section>
    );
};

export default Feedback;
