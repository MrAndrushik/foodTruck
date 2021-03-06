import Image from "next/image";
import Link from "next/link";

import data from "../../public/data/events.json";
import Breadcrumbs from "../../components/modules/Breadcrumbs";

import styles from "../../styles/modules/Events.module.scss";

const Events = ({ limit = 3 }) => {
    return (
        <section
            className={!limit ? `${styles.section}` : `${styles.section1}`}
        >
            <div
                itemScope
                itemType="http://schema.org/Blog"
                className="container"
            >
                {limit === false ? (
                    <>
                        <Breadcrumbs />
                        <h1
                            itemProp="description"
                            className={`${styles.mainTitle}`}
                        >
                            Проведённые мероприятия
                        </h1>
                    </>
                ) : (
                    <h2
                        itemProp="description"
                        className={`${styles.title} stn-title`}
                    >
                        Проведённые мероприятия
                    </h2>
                )}

                <div className={styles.wrapper}>
                    {data.map(
                        (item, index) =>
                            (index < limit || limit === false) && (
                                <Link key={item.id} href={`/events/${item.id}`}>
                                    <a className={styles.eventLink}>
                                        <article
                                            itemProp="blogPosts"
                                            itemScope
                                            itemType="http://schema.org/BlogPosting"
                                            className={styles.block}
                                        >
                                            <div className={styles.imgBlock}>
                                                <Image
                                                    itemProp="image"
                                                    src={item.imgSrc}
                                                    alt="event"
                                                    width={365}
                                                    height={229}
                                                    layout="responsive"
                                                />
                                            </div>
                                            <div className={styles.content}>
                                                <h3
                                                    itemProp="headline"
                                                    className={styles.caption}
                                                >
                                                    {item.caption}
                                                </h3>
                                                <p
                                                    itemProp="description"
                                                    className={styles.descr}
                                                >
                                                    {item.shortDescr}
                                                </p>
                                            </div>
                                            <Link href={`/events/${item.id}`}>
                                                <button
                                                    className={styles.detail}
                                                >
                                                    Подробнее
                                                </button>
                                            </Link>
                                        </article>
                                    </a>
                                </Link>
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
