import Breadcrumbs from "../modules/Breadcrumbs";
import Image from "next/image";

import styles from "../../styles/buy-foodtruck/Hero.module.scss";

const Hero = () => {
    const content = [
        {
            caption: "4 вида фудтрака и 6 цветов",
            descr: "Украсим и забрендируем фудтрак под ваши препочтения",
        },
        {
            caption: "4 вида фудтрака и 6 цветов",
            descr: "Украсим и забрендируем фудтрак под ваши препочтения",
        },
        {
            caption: "4 вида фудтрака и 6 цветов",
            descr: "Украсим и забрендируем фудтрак под ваши препочтения",
        },
    ];
    return (
        <section className={styles.section}>
            <div className={`container`}>
                <Breadcrumbs />
                <h1 className={styles.title}>Купить фудтрак</h1>
                <div className={styles.imgBlock}>
                    {" "}
                    <Image
                        width={1140}
                        height={416}
                        src="/img/buy-foodtruck/hero.jpg"
                        alt="hero"
                    />
                </div>
                <div className={styles.wrapper}>
                    {content.map((item, index) => (
                        <div key={index} className={styles.block}>
                            <h3 className={styles.caption}>{item.caption}</h3>
                            <p className={styles.descr}>{item.descr}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
