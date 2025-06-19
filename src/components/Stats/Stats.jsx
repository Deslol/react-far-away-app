import {useState} from "react";
import styles from './Stats.module.css'

export default function Stats() {
    const [itemCount, setItemCount] = useState(0);
    return (
        <footer className={styles.stats}>
            <em> You have {itemCount} items on your list, and you have already packed X (X%)</em>
        </footer>
    );
}