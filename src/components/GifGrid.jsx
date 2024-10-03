const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=SjP3WHyFelRPbj5JidGdSXEfzYdTvgWZ&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
    }));
    console.log(gifs);
    return gifs
}

export const GifGrid = ({ category }) => {

    getGifs(category);

    return (
        <>
            <div key={category}>
                <h3>{category}</h3>
                <p >{category}</p>
            </div>
        </>
    )
}