import Image from "next/image";

import styles from "../../styles/foodtrucks/Advantages.module.scss";

const Advantages = ({ arr }) => {
    return (
        <section className={styles.section}>
            <div className={`${styles.container} container`}>
                <h2 className={`${styles.title} stn-title`}>А еще мы можем</h2>
                <div className={`${styles.wrapper}`}>
                    {arr.map((item, index) => (
                        <div key={index} className={styles.block}>
                            <div
                                className={
                                    index % 2 === 1
                                        ? `${styles.imgBlock} ${styles.imgBlock2}`
                                        : `${styles.imgBlock}`
                                }
                            >
                                <Image
                                    src={item.imgSrc}
                                    alt="advantage"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <h3 className={styles.caption}>{item.caption}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Advantages;
