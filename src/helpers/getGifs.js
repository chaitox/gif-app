export const getGifs = async (category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=PzUi8uRiVuf71mTgeoXlATKm3aHMhT1O&q=${encodeURI(category)}&limit=10`;
    const resp = await fetch(url)
    const { data } = await resp.json();

    
    const gifs = data.map( img =>{
        return {
            id: img.id,
            title: img.title,
            image:img.images?.downsized_medium.url
        }
    })
   
    return  gifs ;
}