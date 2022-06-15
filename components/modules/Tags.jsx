import styles from "../../styles/modules/Tags.module.scss";

const Tags = ({ tags, activeTag, setActiveTag }) => {
    return (
        <div className={`${styles.tags}`}>
            <ul className={styles.list}>
                {tags.map((tag) => (
                    <li
                        onClick={() => setActiveTag(tag)}
                        className={
                            tag === activeTag
                                ? `${styles.tag} ${styles.activeTag}`
                                : `${styles.tag}`
                        }
                        key={tag}
                    >
                        {tag}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tags;
