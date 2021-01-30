
import { useFetchGif } from '../hooks/useFetchGif';

export const GifGrid = ({ category }) => {

    


  const {data, loading} = useFetchGif(category)


    


    return (
        <div className="card">
            <h3> {category} </h3>
            <ol>
                {
                    data.map(({title, image, id})=>{
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
