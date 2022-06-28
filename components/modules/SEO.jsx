import styles from "../../styles/modules/SEO.module.scss";
import data from "../../public/data/seo.json";
import Image from "next/image";

const SEO = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <ul className={styles.wrapper}>
                    {data.map((item, index) => (
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
