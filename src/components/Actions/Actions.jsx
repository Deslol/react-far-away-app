import styles from './Actions.module.css'
import {useEffect, useState} from "react";

export default function Actions({items, onSortItem, onClearList}) {
    const [sortBy, setSortBy] = useState("input")
    useEffect(() => {
        let sortedItems;

        switch (sortBy) {
            case 'description':
                sortedItems = items.slice().sort((a, b) =>
                    a.description.localeCompare(b.description)
                );
                break;
            case 'packed':
                sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
                break;
            default:
                sortedItems = items;
        }

        const itemsJson = JSON.stringify(items);
        const sortedJson = JSON.stringify(sortedItems);
        if (itemsJson !== sortedJson) {
            onSortItem(sortedItems);
        }
    }, [sortBy, items, onSortItem]);
    return (
        <div className={styles.actions}>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value='input'>Sort by input order</option>
                <option value='description'>Sort by description</option>
                <option value='packed'>Sort by packed</option>
            </select>
            <button onClick={onClearList}>Clear List</button>
        </div>
    )
}