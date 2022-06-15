import Image from "next/image";
import Link from "next/link";

import HeroImg from "../../public/img/stations/hero.jpg";
import AsideImg1 from "../../public/img/stations/aside-1.png";
import AsideImg2 from "../../public/img/stations/aside-2.png";

import styles from "../../styles/stations/Hero.module.scss";
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
                    <h1 className={styles.title}>Кулинарные станции</h1>
                    <p className={styles.descr}>
                        Кулинарная станция (гастро-станция, фуд-станция) - это
                        передвижная точка, специально, оборудованная для
                        приготовления того или иного блюда с продуктами,
                        посудой, подходящим декором.
                    </p>
                </div>
                <div className={styles.asideImg2}>
                    <Image src={AsideImg2} alt="aside" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
