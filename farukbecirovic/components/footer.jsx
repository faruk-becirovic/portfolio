import styles from './layout.module.css'

export default function Footer(props) {
    return (
        <div className={styles.footer}>
            <div className={styles.buttons}>
                <a className={styles.button}>More about me</a>
                <a className={styles.button}>Projects</a>
                <a className={styles.button}>Experience</a>
                <a className={styles.button}>Contact</a>
            </div>
            <div className={styles.notice}>
                <p>
                    &copy; 2022. Faruk Bećirović.
                </p>
                <p>
                    All rights reserved. | Sva prava pridržana.
                </p>
            </div>
        </div>
    );
}