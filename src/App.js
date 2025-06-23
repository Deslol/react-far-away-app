import Logo from "./components/Logo/Logo";
import PackingList from "./components/PackingList/PackingList";
import Form from "./components/Form/Form";
import Stats from "./components/Stats/Stats";
import {useState} from "react";

function App() {
    const [items, setItems] = useState([])

    function handleAddItem(newItem) {
        setItems((items) => [...items, newItem])
    }

    function handleDeleteItem(i) {
        setItems((items) => items.filter((item, idx) => idx !== i));
    }

    function handleSelectItem(i) {
        setItems(items => items.map((item, idx) => idx === i ? {...item, packed: !item.packed} : item))

    }

    function handleSortItem(sortedItems) {
        setItems(sortedItems)
    }

    function handleClearList () {
        setItems([])
    }

    return (
        <div className="app">
            <Logo/>
            <Form onAddItem={handleAddItem}/>
            <PackingList
                onSelectItem={handleSelectItem}
                onDeleteItem={handleDeleteItem}
                onClearList={handleClearList}
                onSortItem={handleSortItem}
                items={items}
            />
            <Stats items={items}/>
        </div>
    );
}

export default App;
