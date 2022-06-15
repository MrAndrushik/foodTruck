import Image from "next/image";
import HeroImg from "../../public/img/home/hero.jpg";
import StepsBlock from "../modules/StepsBlock";

import styles from "../../styles/home/Hero.module.scss";

const Hero = ({ obj }) => {
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
            <div className={styles.shadow}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Фудтраки в аренду</h1>
                    <p className={styles.descr}>
                        И много другого для питания...
                    </p>
                </div>
            </div>
            <StepsBlock obj={obj} />
        </section>
    );
};

export default Hero;
