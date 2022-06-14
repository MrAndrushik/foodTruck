import styles from "../../styles/modules/StepsBlock.module.scss";
import Image from "next/image";

const StepsBlock = ({ obj }) => {
    return (
        <div className={`${styles.container} container`}>
            {obj.steps.map((step, index) => (
                <div key={index} className={styles.block}>
                    <div className={styles.borderBlock}>
                        <div className={styles.imgBlock}>
                            <Image src={step.imgSrc} alt="step" layout="fill" />
                        </div>
                    </div>
                    <div
                        className={
                            index % 2 === 1
                                ? `${styles.content} ${styles.content2}`
                                : `${styles.content} `
                        }
                    >
                        <h3 className={styles.caption}>{step.caption}</h3>
                        <p className={styles.text}>{step.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StepsBlock;
