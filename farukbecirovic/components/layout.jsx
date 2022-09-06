import Panel from "./panel";
import Footer from "./footer";
import styles from './layout.module.css'

export default function Layout(props) {
    return (
        <div>
            <Panel />
            <div className={styles.display}>
                {props.children}
            </div>
            <Footer />
        </div>
    );
}