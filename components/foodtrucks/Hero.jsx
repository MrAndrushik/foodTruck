import Image from "next/image";

import HeroImg from "../../public/img/foodtrucks/hero.jpg";
import AsideImg1 from "../../public/img/foodtrucks/aside-1.png";
import AsideImg2 from "../../public/img/foodtrucks/aside-2.png";

import styles from "../../styles/foodtrucks/Hero.module.scss";
import Breadcrumbs from "../modules/Breadcrumbs";

const Hero = () => {
    const getCoords = (elem) => {
        let box = elem.getBoundingClientRect();
        return {
            top: box.top + window.pageYOffset,
        };
    };

    const handleClick = () => {
        const catalog = document.querySelector("#catalog");
        const position = getCoords(catalog);

        if (window.innerWidth > 1170) {
            window.scrollTo({
                top: `${position.top - 100}`,
                behavior: "smooth",
            });
        } else {
            window.scrollTo({
                top: `${position.top - 30}`,
                behavior: "smooth",
            });
        }
    };
    return (
        <section className={styles.section}>
            <div className={styles.imgBlock}>
                <Image
                    priority
                    src={HeroImg}
                    alt="foodtruck"
                    layout="responsive"
                />
            </div>
            <div className={`${styles.container}`}>
                <div className={styles.asideImg1}>
                    <Image src={AsideImg1} alt="aside" />
                </div>
                <div className={styles.content}>
                    <Breadcrumbs />
                    <h1 className={styles.title}>Фудтраки в аренду</h1>
                    <p className={styles.descr}>
                        Фудтраки - это фургоны, либо автомобильные прицепы,
                        специально оборудованные для приготовления, хранения и
                        продажи готовой еды.
                    </p>
                    <button
                        className={styles.btn}
                        onClick={() => handleClick()}
                    >
                        Выбрать фудтрак
                    </button>
                </div>
                <div className={styles.asideImg2}>
                    <Image src={AsideImg2} alt="aside" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
