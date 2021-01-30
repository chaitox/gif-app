import React, { useEffect, useState } from 'react'

export const GifGrid = ({ category }) => {

    
    const [images, setImages] = useState([]);


    useEffect(()=>{        
        getGifs();
    },[])


    const getGifs = async ()=>{
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=PzUi8uRiVuf71mTgeoXlATKm3aHMhT1O&q=Rick and Morty&limit=10';
        const resp = await fetch(url)
        const { data } = await resp.json();

        
        const gifs = data.map( img =>{
            return {
                id: img.id,
                title: img.title,
                image:img.images?.downsized_medium.url
            }
        })
        console.log(gifs);
        setImages( gifs );
    }


    return (
        <div>
            <h3> {category} </h3>
            <ol>
                {
                    images.map(({title, image, id})=>{
                        return <>
                            <li key={id}>{title}</li>
                            <img src={image} alt='algo'/>
                        </>
                    })
                }
            </ol>
        </div>
    )
}
