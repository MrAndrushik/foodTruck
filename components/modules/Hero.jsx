import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/modules/Hero.module.scss";
import Breadcrumbs from "../modules/Breadcrumbs";

const Hero = ({ obj, partial = false }) => {
    return (
        <section
            className={
                partial
                    ? `${styles.section} ${styles.sectionGray}`
                    : `${styles.section}`
            }
        >
            <div className={styles.imgBlock}>
                <Image
                    priority
                    src={obj.imgSrc}
                    alt="poster"
                    width={1440}
                    height={310}
                    layout="responsive"
                />
            </div>
            <div className={`${styles.container}`}>
                {obj.asideImg1 && (
                    <div className={styles.asideImg1}>
                        <Image
                            src={obj.asideImg1}
                            alt="aside"
                            width={343}
                            height={282}
                        />
                    </div>
                )}
                <div className={styles.content}>
                    <Breadcrumbs />
                    <h1 className={styles.title}>{obj.title}</h1>
                    {obj.descr && <p className={styles.descr}>{obj.descr}</p>}
                    {obj.btn && (
                        <button className={styles.btn}>{obj.btn}</button>
                    )}
                </div>
                {obj.asideImg2 && (
                    <div className={styles.asideImg2}>
                        <Image
                            src={obj.asideImg2}
                            alt="aside"
                            width={323}
                            height={317}
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Hero;
