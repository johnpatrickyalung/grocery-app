import React from 'react'
import { useState } from "react";

import ModalComponent from './ModalComponent';
const GroceryItemConponent = ({ item, handleSaveItem, handleDeleteItem }) => {
    const { id, name } = item;
    const [edit, setEdit] = useState(false);
    const [newItem, setNewItem] = useState(name);
    const [error, setError] = useState('');
    const [open, setOpen] = useState(false)
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
    const handleConfirm = (result) => {
        console.log(open)
        if (result) {
            console.log('hello')
            setOpen(true)
            handleDeleteItem(id, result)
        }
        setOpen(false)
    }
    const onDelete = () => {
        setOpen(true)
    }
    return (
        <>{open}
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

            <ModalComponent
                text={`Delete ${name}?`}
                open={open}
                handleConfirm={handleConfirm}
            />
        </>
    )
}

export default GroceryItemConponent