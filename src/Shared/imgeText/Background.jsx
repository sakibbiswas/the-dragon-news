import styles from "./Background.module.css";

import bg from '../../assets/bg.png'
import { Button } from "react-bootstrap";

const Background = () => {
    return (
        <article
            className={styles.article}
            style={{ backgroundImage: `url(${bg})` }}
        >
            <h4 className={styles.header}>Create an Amazing Newspaper</h4>
            <p className={styles.header}>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
            <div className={`pb-20 ${styles.header}`}>
                <Button variant="danger">Learn More</Button>
            </div>

        </article>
    );
};

export default Background;