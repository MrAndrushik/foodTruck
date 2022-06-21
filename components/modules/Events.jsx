import Image from "next/image";
import Link from "next/link";

import data from "../../public/data/events.json";
import Breadcrumbs from "../../components/modules/Breadcrumbs";

import styles from "../../styles/modules/Events.module.scss";

const Events = ({ limit = 3 }) => {
    return (
        <section className={!limit ? `${styles.section}` : ""}>
            <div className="container">
                {limit === false ? (
                    <>
                        <Breadcrumbs />
                        <h1 className={`${styles.mainTitle}`}>
                            Проведённые мероприятия
                        </h1>
                    </>
                ) : (
                    <h2 className={`${styles.title} stn-title`}>
                        Проведённые мероприятия
                    </h2>
                )}

                <div className={styles.wrapper}>
                    {data.map(
                        (item, index) =>
                            (index < limit || limit === false) && (
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
                                    <Link href={`/events/${item.id}`}>
                                        <button className={styles.detail}>
                                            Подробнее
                                        </button>
                                    </Link>
                                </div>
                            )
                    )}
                </div>
                {limit !== false && (
                    <Link href="/events">
                        <button className={styles.btn}>
                            Открыть все мероприятия
                        </button>
                    </Link>
                )}
            </div>
        </section>
    );
};

export default Events;
