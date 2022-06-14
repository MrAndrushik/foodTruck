import Image from "next/image";

import styles from "../../styles/home/Rent.module.scss";

const Rent = ({ arr }) => {
    return (
        <section className={styles.rent}>
            <div className={`container`}>
                <h2 className={`${styles.title} stn-title`}>Сдаем в аренду</h2>
                <div className={styles.wrapper}>
                    <div className={styles.top}>
                        {" "}
                        {arr.map(
                            (item, index) =>
                                index <= 1 && (
                                    <div key={index} className={styles.block}>
                                        <Image
                                            src={item.imgSrc}
                                            layout="fill"
                                            alt="Rent type"
                                            objectFit="cover"
                                        />
                                        <h3 className={styles.caption}>
                                            {item.caption}
                                        </h3>
                                    </div>
                                )
                        )}
                    </div>
                    {arr.map(
                        (item, index) =>
                            index > 1 && (
                                <div key={index} className={styles.block}>
                                    <Image
                                        src={item.imgSrc}
                                        layout="fill"
                                        alt="Rent type"
                                        objectFit="cover"
                                    />
                                    <h3 className={styles.caption}>
                                        {item.caption}
                                    </h3>
                                </div>
                            )
                    )}
                </div>
            </div>
        </section>
    );
};

export default Rent;
