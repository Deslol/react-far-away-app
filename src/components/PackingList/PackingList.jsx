import styles from './PackingList.module.css'
import {useState} from "react";
import PackingListItem from "./PackingListItem/PackingListItem";

export default function PackingList() {
    const initialItems = [
        {id: 1, description: "Passports", quantity: 2, packed: false},
        {id: 2, description: "Socks", quantity: 12, packed: false},
    ];

    const [items, setItems] = useState(initialItems)
    return (
        <div className={styles.list}>
            <ul>
                {items.map((item, index) => (
                    <PackingListItem key={index} item={item} />
                ))}
            </ul>
        </div>
    );
}