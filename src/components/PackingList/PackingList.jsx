import styles from './PackingList.module.css'
import PackingListItem from "./PackingListItem/PackingListItem";
import Actions from "../Actions/Actions";

export default function PackingList({items, onDeleteItem, onSelectItem, onSortItem, onClearList}) {
    return (<div className={styles.list}>
        <ul>
            {items.map((item, index) => (<PackingListItem
                onSelectItem={onSelectItem}
                onDeleteItem={onDeleteItem}
                item={item}
                key={index}
                idx={index}
            />))}
        </ul>
        <Actions items={items} onSortItem={onSortItem} onClearList={onClearList}/>
    </div>);
}