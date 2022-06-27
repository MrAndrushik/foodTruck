import { setFeedbackIsOpen } from "../../redux/toolkitSlice";
import { useDispatch } from "react-redux";

import styles from "../../styles/modules/BidBtn.module.scss";

const BidBtn = ({ children }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        document.querySelector("html").classList.add("hidden");
        dispatch(setFeedbackIsOpen(true));
    };

    return (
        <button onClick={() => handleClick()} className={styles.button}>
            {children}
        </button>
    );
};

export default BidBtn;
