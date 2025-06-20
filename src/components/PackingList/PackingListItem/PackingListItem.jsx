export default function PackingListItem({item, onDeleteItem, idx}) {
    return (
        <li>
            <span style={item.packed ? {textDecoration: "line-through"} : {}}>
                {item.quantity} {item.description}
            </span>
            <button onClick={() => onDeleteItem(idx)}>❌</button>
        </li>
    )
}