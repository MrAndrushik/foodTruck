import Image from "next/image";

import cl from "classnames";
import styles from "../../styles/foodtrucks/Advantages.module.scss";

const Advantages = ({ obj, border = true, background = "left" }) => {
    return (
        <section
            className={
                background === "left"
                    ? `${styles.section}`
                    : `${styles.section1}`
            }
        >
            <div className={`${styles.container} container`}>
                <h2 className={`${styles.title} stn-title`}>{obj.title}</h2>
                <div className={`${styles.wrapper}`}>
                    {obj.catalog.map((item, index) => (
                        <div key={index} className={styles.block}>
                            <div
                                className={cl(styles.imgBlock, {
                                    [styles.imgBlock2]:
                                        index % 2 === 1 && border,
                                    [styles.imgBlock3]: !border,
                                })}
                            >
                                <Image
                                    src={item.imgSrc}
                                    alt="advantage"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            {item.caption && (
                                <h3 className={styles.caption}>
                                    {item.caption}
                                </h3>
                            )}
                            {item.title && (
                                <h3 className={styles.blockTitle}>
                                    {item.title}
                                </h3>
                            )}
                            {item.descr && (
                                <p className={styles.blockDescr}>
                                    {item.descr}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Advantages;
