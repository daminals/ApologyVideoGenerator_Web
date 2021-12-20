import React, { useEffect, useState } from 'react';
import axios from 'axios'

export default function Right(link) {
    const readGet = {}

    useEffect(()=>{
        axios.get(link).then(response => {
          console.log("collecting video", response)
          readGet = response;
        }).catch(error => {
          console.log(error)
        })
    
      }, [])
        
    return (
        <div class="split right">
            {readGet.status === 200 ? 
            <video width="320" height="240" autoplay controls>
                <source src={link.current.value} type="video/mp4"/>
            </video>
            :
            <video width="320" height="240" autoplay loop>
                <source src="/loading" type="video/mp4"/>
            </video>}
        </div>
    )
}
