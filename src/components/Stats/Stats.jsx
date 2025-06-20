import styles from './Stats.module.css'

export default function Stats({items}) {
    return (
        <footer className={styles.stats}>
            <em> You have {items?.length} items on your list, and you have already packed X (X%)</em>
        </footer>
    );
}