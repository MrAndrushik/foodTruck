import Image from "next/image";
import { setFeedbackIsOpen } from "../../redux/toolkitSlice";
import { useDispatch } from "react-redux";

import background from "../../public/img/master-class/poster-bg.png";

import styles from "../../styles/master-class/Poster.module.scss";

const Poster = () => {
    const list = [
        {
            caption: "Москва, Егорьевский проезд 2А",
            imgSrc: "/img/master-class/marker.svg",
        },
        {
            caption: "Бесплатная парковка",
            imgSrc: "/img/master-class/taxi.svg",
        },
        {
            caption: "Помещение - 370 м²",
            imgSrc: "/img/master-class/home.svg",
        },
    ];

    const dispatch = useDispatch();
    const handleClick = () => {
        document.querySelector("html").classList.add("hidden");
        dispatch(setFeedbackIsOpen(true));
    };

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.wrapper}>
                    <Image
                        className={styles.img}
                        src={background}
                        alt="poster"
                        layout="fill"
                        objectFit="cover"
                    />
                    <span className={styles.notice}>
                        Более 50 мастер-классов
                    </span>
                    <h2 className={styles.title}>
                        Проведём мастер-класс у нас на площадке
                    </h2>
                    <button
                        className={styles.btn}
                        onClick={() => handleClick()}
                    >
                        Оставить заявку
                    </button>
                    <ul className={styles.list}>
                        {list.map((item, index) => (
                            <li key={index} className={styles.item}>
                                <Image
                                    src={item.imgSrc}
                                    alt="icon"
                                    width={24}
                                    height={24}
                                />
                                <h3 className={styles.caption}>
                                    {item.caption}
                                </h3>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Poster;
