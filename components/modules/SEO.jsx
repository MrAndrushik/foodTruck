import styles from "../../styles/modules/SEO.module.scss";
import Image from "next/image";

import data from "../../public/data/seo.json";

const SEO = ({ page }) => {
    const arr = data[page];

    if (arr === undefined) {
        return null;
    }
    return (
        <section className={styles.section}>
            <div className="container">
                <ul className={styles.wrapper}>
                    {arr.map((item, index) => (
                        <li key={index} className={styles.block}>
                            <div className={styles.imgBlock}>
                                <Image
                                    src={item.imgSrc}
                                    width={560}
                                    height={300}
                                    alt="example"
                                    layout="responsive"
                                />
                            </div>
                            <div className={styles.content}>
                                <h2 className={`${styles.title} stn-title`}>
                                    {item.caption}
                                </h2>
                                <div
                                    className={styles.textBlock}
                                    dangerouslySetInnerHTML={{
                                        __html: item.text,
                                    }}
                                ></div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default SEO;
