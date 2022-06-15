import styles from "../../styles/modules/Card.module.scss";
import Image from "next/image";

const Card = ({ caption, imgSrc, id, startPrice1, startPrice2, bucket }) => {
    return (
        <div className={styles.block}>
            <div className={styles.imgBlock}>
                <Image src={imgSrc} alt="catalog-item" layout="fill" />
            </div>
            <div className={styles.titleBlock}>
                <h3 className={styles.caption}>{caption}</h3>
            </div>
            <div className={styles.priceBlock}>
                <div className={styles.priceItem}>
                    <p className={styles.price}>{`ОТ ${startPrice1} ₽`}</p>
                    <span>Первые сутки</span>
                </div>
                <div className={styles.priceItem}>
                    <p className={styles.price}>{`ОТ ${startPrice2} ₽`}</p>
                    <span>Вторые сутки</span>
                </div>
            </div>
            <div className={styles.buttonBlock}>
                <button className={styles.btn}>Подробнее</button>
                {bucket && (
                    <button className={styles.bucketBtn}>+ Добавить</button>
                )}
            </div>
        </div>
    );
};

export default Card;
