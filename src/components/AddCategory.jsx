import PropTypes from 'prop-types';
import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onResetForm = () => {
        setInputValue('');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const newValue = inputValue.trim();
        if (newValue.length <= 1) return;

        onNewCategory(newValue);
        onResetForm();
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input
                    type="text"
                    placeholder="Search gifs"
                    value={inputValue}
                    onChange={onInputChange} />
            </div>
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}
