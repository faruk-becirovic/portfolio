import styles from './greeting.module.css'

export default function HeroText(props) {
    return (
        <div className={styles.heroText}>
            <div className={styles.content}>
                <p className={styles.text}>
                    I am passionate about efficiency, elegant
                    and minimalist solutions and good engineering
                    practices, including clean code and consistency
                </p>
            </div>
        </div>
    );
}