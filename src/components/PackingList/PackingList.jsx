import styles from './PackingList.module.css'
import PackingListItem from "./PackingListItem/PackingListItem";

export default function PackingList({items, onDeleteItem}) {
    return (
        <div className={styles.list}>
            <ul>
                {items.map((item, index) => (
                    <PackingListItem key={index} item={item} onDeleteItem={onDeleteItem} idx={index}/>
                ))}
            </ul>
        </div>
    );
}