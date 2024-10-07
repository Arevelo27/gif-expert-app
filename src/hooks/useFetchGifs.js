import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Agregar estado para isLoading

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false); // Cambiar el estado de isLoading a false después de cargar las imágenes
    }

    useEffect(() => {
        getImages()
    }, [])

    return {images, isLoading}; 
}