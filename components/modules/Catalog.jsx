import { useState } from "react";

import styles from "../../styles/modules/Catalog.module.scss";
import Card from "./Card";
import Tags from "./Tags";

const Catalog = ({ obj, bucket = false, partial = false }) => {
    const tags = obj.tags;
    const catalog = obj.catalog;

    const [activeTag, setActiveTag] = useState("Все");

    return (
        <section
            className={
                partial
                    ? `${styles.section} ${styles.sectionPartial}`
                    : `${styles.section}`
            }
        >
            {obj.title && (
                <h2 className={`${styles.title} stn-title`}>{obj.title}</h2>
            )}
            {tags && (
                <Tags
                    tags={tags}
                    activeTag={activeTag}
                    setActiveTag={setActiveTag}
                />
            )}

            <div className="container">
                <div className={styles.wrapper}>
                    {catalog.map(
                        (item) =>
                            (activeTag === "Все" ||
                                item.tags.includes(activeTag)) && (
                                <Card
                                    bucket={bucket}
                                    key={item.id}
                                    caption={item.caption}
                                    imgSrc={item.imgSrc}
                                    id={item.id}
                                    startPrice1={item.startPrice1}
                                    startPrice2={item.startPrice2}
                                />
                            )
                    )}
                </div>
            </div>
        </section>
    );
};

export default Catalog;
