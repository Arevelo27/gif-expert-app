import { useState } from 'react'

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onResetForm = () => {
        setInputValue('');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;
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
