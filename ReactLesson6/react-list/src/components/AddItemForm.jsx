import React, {useState} from "react";
import "../styles/AddItemForm.css"

const AddItemForm = ({ onAddItem }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            onAddItem(inputValue);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-item-form">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter a new Item"
            />
            <button type="submit">Add Item</button>
        </form>
    );
};

export default AddItemForm;