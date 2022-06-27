import { useState } from "react";

import styles from "../../styles/modules/Catalog.module.scss";
import Card from "./Card";
import Tags from "./Tags";

const Catalog = ({
    style,
    obj,
    arr,
    bucket = false,
    partial = false,
    link = false,
}) => {
    const tags = obj?.tags;
    const catalog = [];

    if (arr) {
        catalog = arr;
    } else {
        catalog = obj.catalog;
    }

    const [activeTag, setActiveTag] = useState("Все");

    return (
        <section
            style={style}
            id="catalog"
            className={
                partial
                    ? `${styles.section} ${styles.sectionPartial}`
                    : `${styles.section}`
            }
        >
            {obj?.title && (
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
                <ul
                    itemScope
                    itemType="http://schema.org/ItemList"
                    className={styles.wrapper}
                >
                    {catalog.map(
                        (item) =>
                            (activeTag === "Все" ||
                                item.tags.includes(activeTag)) && (
                                <Card
                                    obj={item}
                                    bucket={bucket}
                                    key={item.id}
                                    link={link}
                                />
                            )
                    )}
                </ul>
            </div>
        </section>
    );
};

export default Catalog;
