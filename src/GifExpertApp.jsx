import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const onAddCategory = (onNewCategory) => {
        if (categories.includes(onNewCategory)) return;
        setCategories([onNewCategory, ...categories]);
    }

    return (
        <>
            {/* Título */}
            <h1>Gif Expert App</h1>

            {/* Input */}
            <AddCategory 
                onNewCategory={onAddCategory}
            />

            {/* Listado de Gifs */}
            <ol>
                {categories.map(category => (
                    <li key={category}>{category}</li>
                ))}
            </ol>
            {/* Gif Item */}
        </>
    );
}