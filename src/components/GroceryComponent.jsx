import React from 'react'
import { useState, useRef } from "react";
import { v4 as id } from 'uuid'
import GroceryItemConponent from './GroceryItemConponent';


const GroceryComponent = () => {
    const [item, setItem] = useState('');
    const [groceryItems, setGroceryItems] = useState([]);
    const [error, setError] = useState('');
    const inputRef = useRef()


    const handleAddItem = () => {
        if (item) {
            setGroceryItems([...groceryItems, { id: id(), name: item }])
            setItem('')
            setError('')
        } else {
            setError('Grocery should not be empty!')
            inputRef.current.focus()
        }
    }
    const handleSaveItem = (id, newItem) => {

        const saveItem = groceryItems.map(item => {
            if (item.id === id) return { ...item, name: newItem }

            return item;
        })
        setGroceryItems(saveItem)
    }
    const handleDeleteItem = (id, result) => {

        if (result) {

            const saveItem = groceryItems.filter(item => item.id !== id)
            console.log(saveItem)
            setGroceryItems(saveItem)
        }

    }

    const handleClearAll = () => {
        setGroceryItems([])
    }
    return (
        <div className='grocery-buddy'>
            <h1>Grocery App</h1>
            <div className='input-section'>
                <div className="input-container">
                    <input ref={inputRef} type="text" placeholder='Enter an item...' value={item} onChange={(event) => setItem(event.target.value)} />
                    <button className="btn-add" onClick={handleAddItem}>Add Item</button>
                </div>
                <div>
                    {error ?
                        <p className="errors">{error}</p>
                        : null}
                </div>


            </div>
            <ul className="grocery-list">
                {
                    groceryItems.map((item) => <GroceryItemConponent handleSaveItem={handleSaveItem} handleDeleteItem={handleDeleteItem} key={item.id} item={item} className="" />)
                }
            </ul>

            {
                groceryItems.length > 0 ? (
                    <button onClick={handleClearAll} className="btn-clear">Clear Grocery</button>
                ) : null
            }


        </div>
    )
}

export default GroceryComponent