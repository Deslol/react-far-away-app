import styles from './PackingList.module.css'
import PackingListItem from "./PackingListItem/PackingListItem";
import Actions from "../Actions/Actions";

export default function PackingList({items, onDeleteItem, onSelectItem}) {
    return (
        <div className={styles.list}>
            <ul>
                {items.map((item, index) => (
                    <PackingListItem key={index} item={item} onDeleteItem={onDeleteItem} idx={index} onSelectItem={onSelectItem}/>
                ))}
            </ul>
            <Actions/>
        </div>
    );
}