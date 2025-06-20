import styles from './Stats.module.css'

export default function Stats({items}) {
    if (!items.length) return <p className={styles.stats}><em>Start Adding some items to your packing list</em></p>
    const total = items?.length ?? 0
    const packed = items?.reduce((acc, cur) => cur.packed ? acc + 1 : acc, 0) ?? 0
    const packedPercentage = Math.round((packed / total) * 100)
    return (
        <footer className={styles.stats}>
            <em> You have {total} items on your list, and you have already
                packed {packed} ({packedPercentage}%)</em>
        </footer>
    );
}