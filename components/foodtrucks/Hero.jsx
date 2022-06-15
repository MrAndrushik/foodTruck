import Image from "next/image";
import Link from "next/link";

import HeroImg from "../../public/img/foodtrucks/hero.jpg";
import AsideImg1 from "../../public/img/foodtrucks/aside-1.png";
import AsideImg2 from "../../public/img/foodtrucks/aside-2.png";

import styles from "../../styles/foodtrucks/Hero.module.scss";
import Breadcrumbs from "../modules/Breadcrumbs";

const Hero = () => {
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
                    <button className={styles.btn}>Выбрать фудтрак</button>
                </div>
                <div className={styles.asideImg2}>
                    <Image src={AsideImg2} alt="aside" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
