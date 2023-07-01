import React from 'react'
import { useState } from "react";

const GroceryItemConponent = ({ item, handleSaveItem, handleDeleteItem }) => {
    const { id, name } = item;
    const [edit, setEdit] = useState(false);
    const [newItem, setNewItem] = useState(name);
    const [error, setError] = useState('');

    const onEdit = () => {
        if (newItem) {
            handleSaveItem(id, newItem)
            setEdit(false)
            setError('')
        } else {
            setError('Grocery should not be empty!')
            inputRef.current.focus()
        }

    }
    const onDelete = () => {
        handleDeleteItem(id)
    }
    return (
        <>
            <li>
                {edit ?
                    <div className="edit-container">
                        <input type="text" onChange={(event) => setNewItem(event.target.value)} value={newItem} />

                        {error ? <p className="errors">{error}</p> : null}
                    </div>

                    : (
                        <span>{name}</span>
                    )

                }


                <div>
                    <button
                        className='btn-edit'
                        onClick={() => { edit ? onEdit() : setEdit(!edit) }}>
                        {edit ? 'Save' : 'Edit'}
                    </button>
                    <button onClick={() => onDelete()} className="btn-delete">Delete</button>
                </div>
            </li >
        </>
    )
}

export default GroceryItemConponent