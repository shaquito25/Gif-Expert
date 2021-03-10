import React from 'react';
import { UseFecthGifs } from '../hooks/UseFecthGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    

    const { data:images , loading } = UseFecthGifs( category )
    
    return (
        <>

        <h3>{category}</h3>

        {loading && <p>Loading</p>}

        <div className="card-grid">
    
                {

                    images.map((img) =>(

                    <GifGridItem 
                    key={img.id} 
                     {...img}
                     />

                    ))                    

                    }
            
        </div> 
        </>
    )
}

/*key = 8zBQm2RYBgaGXZNa0J3Ngxn1uEtfi4JB*/