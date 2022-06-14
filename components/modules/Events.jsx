import Image from "next/image";
import Link from "next/link";

import data from "../../public/data/events.json";

import styles from "../../styles/modules/Events.module.scss";

const Events = () => {
    return (
        <section>
            <div className="container">
                <h2 className={`${styles.title} stn-title`}>
                    Проведённые мероприятия
                </h2>
                <div className={styles.wrapper}>
                    {data.map((item) => (
                        <div key={item.id} className={styles.block}>
                            <div className={styles.imgBlock}>
                                <Image
                                    src={item.imgSrc}
                                    alt="event"
                                    width={365}
                                    height={229}
                                    layout="responsive"
                                />
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.caption}>
                                    {item.caption}
                                </h3>
                                <p className={styles.descr}>
                                    {item.shortDescr}
                                </p>
                            </div>
                            <button className={styles.detail}>Подробнее</button>
                        </div>
                    ))}
                </div>
                <button className={styles.btn}>Открыть все мероприятия</button>
            </div>
        </section>
    );
};

export default Events;
