import styles from './Actions.module.css'

export default function Actions() {
    return (
        <div className={styles.actions}>
            <select>
                <option value='input'>Sort by input order</option>
                <option value='description'>Sort by description</option>
                <option value='packed'>Sort by packed</option>
            </select>
        </div>
    )
}