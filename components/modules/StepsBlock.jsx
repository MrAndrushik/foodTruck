import styles from "../../styles/modules/StepsBlock.module.scss";
import Image from "next/image";
import cl from "classnames";

const StepsBlock = ({ obj }) => {
    return (
        <div
            className={cl("container", {
                [styles.container]: obj.title,
                [styles.containerPaddinged]: obj.iterable,
            })}
        >
            {obj.title && (
                <h2 className={`${styles.title} stn-title`}>{obj.title}</h2>
            )}
            <div className={`${styles.wrapper}`}>
                {obj.steps.map((step, index) => (
                    <div key={index} className={styles.block}>
                        <div className={styles.borderBlock}>
                            <div className={styles.imgBlock}>
                                <Image
                                    src={step.imgSrc}
                                    alt="step"
                                    layout="fill"
                                />
                            </div>
                        </div>
                        <div
                            className={cl(`${styles.content}`, {
                                [styles.content2]: index % 2 === 1,
                                [styles.numeric]: obj.iterable,
                            })}
                        >
                            {obj.iterable && (
                                <span className={styles.num}>{index + 1}</span>
                            )}
                            <div>
                                <h3 className={styles.caption}>
                                    {step.caption}
                                </h3>
                                <p className={styles.text}>{step.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StepsBlock;
