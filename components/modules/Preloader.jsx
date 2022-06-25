import styles from "../../styles/modules/Preloader.module.scss";
import Image from "next/image";
import logo from "../../public/img/preloader.svg";

const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <Image src={logo} alt="logo" />
        </div>
    );
};

export default Preloader;
