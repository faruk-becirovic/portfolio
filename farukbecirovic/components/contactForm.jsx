import styles from './contactForm.module.css'

export default function Contact(props) {
    return (
        <div className={styles.section}>
            <div className={styles.content}>
                <form className={styles.form}>
                    <div className={styles.labels}>
                        <label
                            htmlFor="fname"
                            className={styles.label}
                        >
                            Name and surname:
                        </label>
                    </div>
                    <div className={styles.inputs}>
                        <input
                            type="text"
                            id="fname"
                            name="fname"
                            placeholder=' Your name'
                            className={styles.inputText}
                        /><br />
                    </div>
                    <div className={styles.labels}>
                        <label
                            htmlFor="lname"
                            className={styles.label}
                        >
                            Email address:
                        </label>
                    </div>
                    <div className={styles.inputs}>
                        <input
                            type="text"
                            id="lname"
                            name="lname"
                            placeholder=' Your email'
                            className={styles.inputText}
                        /><br />
                    </div>
                    <div className={styles.labels}>
                        <label
                            htmlFor="message"
                            className={styles.label}
                        >
                            Message:
                        </label>
                    </div>
                    <div className={styles.inputs}>
                        <textarea
                            id="form-message"
                            name="message"
                            placeholder='Write your message...'
                            className={styles.inputTextArea}
                        ></textarea><br />
                    </div>
                    <input
                        className={styles.button}
                        type="submit"
                        value="Get in touch"
                    />
                </form>
            </div>
        </div>
    );
}