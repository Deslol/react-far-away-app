import styles from './Actions.module.css'
import {useState} from "react";

export default function Actions() {
    const [sortBy, setSortBy] = useState("input")
    return (
        <div className={styles.actions}>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value='input'>Sort by input order</option>
                <option value='description'>Sort by description</option>
                <option value='packed'>Sort by packed</option>
            </select>
        </div>
    )
}