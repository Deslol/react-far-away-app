import styles from './Form.module.css'
import {useState} from "react";

export default function Form({onAddItem}) {
    const [newItem, setNewItem] = useState({description: '', quantity: 1, packed: false})
    const reset = () => {
        setNewItem({description: '', quantity: 1, packed: false})
    }
    const submitHandler = (e) => {
        e.preventDefault()
        if (!newItem.description) return
        onAddItem(newItem)
        reset()
    }
    const changeHandler = (e) => {
        setNewItem(prevItem => ({
            ...prevItem,
            description: e.target.value
        }))
    }

    const onChangeHandler = (e) => {
        setNewItem((prevItem) => ({
            ...prevItem, quantity: Number(e.target.value)
        }))
    }
    return (<form className={styles.addForm} onSubmit={submitHandler}>
        <h3>
            What do you need for your 😍 trip?
        </h3>
        <select onChange={onChangeHandler} value={newItem.quantity}>
            {Array.from({length: 20}, (_, i) => {
                return <option key={i + 1} value={i + 1}>{i + 1}</option>
            })}
        </select>
        <input
            type='text'
            placeholder='Item...'
            value={newItem.description}
            onChange={changeHandler}
        />
        <button type="submit">Add</button>
    </form>);
}

