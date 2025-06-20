export default function PackingListItem({item, onDeleteItem, idx, onSelectItem}) {
    return (
        <li>
            <input type='checkbox' value={item.packed} onChange={() => onSelectItem(idx)}/>
            <span style={item.packed ? {textDecoration: "line-through"} : {}}>
                {item.quantity} {item.description}
            </span>
            <button onClick={() => onDeleteItem(idx)}>❌</button>
        </li>
    )
}