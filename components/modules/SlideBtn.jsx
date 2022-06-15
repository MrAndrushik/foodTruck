import { useSwiper } from "swiper/react";
import styles from "../../styles/modules/SlideBtn.module.scss";
import cl from "classnames";
import { useState } from "react";

function SlideBtn({ type, adaptive }) {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(false);

    const handleClick = () => {
        type === "next" ? swiper.slideNext() : swiper.slidePrev();
        if (swiper.isEnd) {
            setIsEnd(true);
        } else {
            setIsEnd(false);
        }
    };

    if (type) {
        return (
            <button
                className={cl({
                    [styles.next]: type === "next",
                    [styles.prev]: type === "prev",
                    [styles.desktop]: adaptive === "desktop",
                    // [styles.disabled]: isEnd,
                })}
                onClick={() => handleClick()}
            >
                <svg
                    width="140"
                    height="47"
                    viewBox="0 0 140 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M105 28.0184V16.9519C105 16.4181 104.581 15.9785 104.048 15.9531L1.38429 11.0659C0.702957 11.0335 0.189827 11.6777 0.37381 12.3345L7.61567 38.1881C7.74706 38.6571 8.1973 38.9633 8.6818 38.913L104.103 29.013C104.613 28.9602 105 28.5307 105 28.0184Z"
                        fill="#3BA8C0"
                    />
                    <path
                        d="M79.9001 40.6851L94.7972 24.1775C95.1847 23.7481 95.1282 23.0804 94.674 22.7223L74.1061 6.50527C72.373 5.13883 73.8052 2.38491 75.919 3.01907L137.154 21.3895C138.072 21.6648 138.114 22.9485 137.217 23.284L82.0853 43.8984C80.1239 44.6318 78.4971 42.2397 79.9001 40.6851Z"
                        fill="#3BA8C0"
                    />
                    <path
                        d="M107.183 24.7618L105.152 20.033C105.002 19.6838 104.667 19.4498 104.287 19.4292L9.40226 14.2797C8.7159 14.2425 8.19746 14.8928 8.38672 15.5536L13.4227 33.1362C13.5542 33.5952 13.9918 33.8972 14.4676 33.8573L106.348 26.1531C107.028 26.096 107.453 25.3891 107.183 24.7618Z"
                        fill="white"
                    />
                    <path
                        d="M86.0696 36.8436L102.857 23.0184C103.399 22.5723 103.325 21.7213 102.714 21.376L81.1725 9.20056C80.1398 8.61685 80.8024 7.04004 81.9421 7.36928L129.938 21.2349C130.87 21.5041 130.912 22.809 129.999 23.1368L87.0432 38.5567C85.9876 38.9356 85.2038 37.5565 86.0696 36.8436Z"
                        fill="white"
                    />
                </svg>
            </button>
        );
    }
}

export default SlideBtn;
