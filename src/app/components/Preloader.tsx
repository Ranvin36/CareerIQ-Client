import styles from "../page.module.css";

const Preloader = () => {
    return(
        <div className={styles.preloader}>
            <img src="/images/infinite-spinner.svg" alt="preloader" />
        </div>
    )
}

export default Preloader;