import styles from './greeting.module.css'

export default function Greeting(props) {
    return (
        <div className={styles.section}>
            <div className={styles.content}>
                <p className={styles.text}>
                    I am a software developer with experience in
                    web development, mvp building and api development.
                </p>
                <p className={styles.text}>
                    My interests include blockchain technology,
                    machine learning, numerical methods
                </p>
                <p className={styles.text}>
                    Continue to find out more about me,
                    including my experience and projects.
                    <br />
                    <a className={styles.link}>Or you can reach out.</a>
                </p>
            </div>
        </div>
    );
}