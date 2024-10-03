import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const onAddCategory = () => {
        setCategories([...categories, 'HunterXHunter']);
    }

    return (
        <>
            {/* Título */}
            <h1>Gif Expert App</h1>

            {/* Input */}
            <AddCategory />

            {/* Listado de Gifs */}
            <button onClick={onAddCategory}>Add</button>
            <ol>
                {categories.map(category => (
                    <li key={category}>{category}</li>
                ))}
                {/* <li>ABC</li> */}
            </ol>
            {/* Gif Item */}
        </>
    );
}