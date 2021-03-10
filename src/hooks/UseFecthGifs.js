import React, { useEffect, useState } from 'react'
import {getGifs} from "../helpers/getGifs"

export const UseFecthGifs = ( category ) => {
    
    const [state, setState] = useState({

          data: [],
          loading:true
    })
      
    useEffect(() => {
   
     getGifs(category).then(imgs => {

          setState({

               data:imgs,
               loading:false
          })
     })
         
    }, [ ])

    return state; 
}
