import React, {useState} from 'react'
import { AddCategories } from './componets/AddCategories'
import { GifGrid } from './componets/GifGrid'

export const GifExpertApp = () => {
    
    const [categories, setcategories] = useState(['One punch'])

    /*const handleAdd = ()=>{
        //setcategories([...categories, 'HunterXHunter']);
        setcategories(cats =>([...cats, 'HunterXHunter']))
    }*/


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategories setcategories = { setcategories }/>
            <hr/>

            

            <ol>
                {
                    categories.map( (category) =>{
                        return  <GifGrid key= {category} category={ category }/>//<li key={ category }>{ category }</li>
                    })
                }
            </ol>
        </>
    )
}
