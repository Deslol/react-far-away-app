import Logo from "./components/Logo/Logo";
import PackingList from "./components/PackingList/PackingList";
import Form from "./components/Form/Form";
import Stats from "./components/Stats/Stats";
import {useState} from "react";

function App() {
    const initialItems = [
        {id: 1, description: "Passports", quantity: 2, packed: false},
        {id: 2, description: "Socks", quantity: 12, packed: false},
    ];

    function handleAddItem(newItem) {
        setItems((items) => [...items, newItem])
    }

    function handleDeleteItem(i) {
        setItems((items) => items.filter((item, idx) => idx !== i));
    }

    const [items, setItems] = useState(initialItems)
    return (
        <div className="app">
            <Logo/>
            <Form onAddItem={handleAddItem}/>
            <PackingList items={items} onDeleteItem={handleDeleteItem}/>
            <Stats/>
        </div>
    );
}

export default App;
