import styles from './layout.module.css'

export default function Panel(props) {
    return (
        <div className={styles.panel}>
            <div className={styles.content}>
                <h1 className={styles.title}>Faruk Bećirović</h1>
                <div className={styles.subtitle}>
                    <h2 className={styles.subtitleLn}>Thinker</h2>
                    <h2 className={styles.subtitleLn}>Problem Solver</h2>
                    <h2 className={styles.subtitleLn}>Software Developer</h2>
                </div>
                <div className={styles.links}>
                    <a
                        href='https://en.wikipedia.org/wiki/Banana'
                        className={styles.link}
                    >
                        Learn more
                    </a>
                    <a
                        href='https://en.wikipedia.org/wiki/Banana'
                        className={styles.link}
                    >
                        Get in touch
                    </a>
                    <a
                        href='https://en.wikipedia.org/wiki/Banana'
                        className={styles.link}
                    >
                        Leave a message
                    </a>
                </div>
            </div>
        </div>
    );
}