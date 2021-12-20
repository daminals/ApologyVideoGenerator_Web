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
            <video width="320" height="240" autoplay>
                {readGet.status === 200 ? 
                <source src={link} type="video/mp4"/>
                :
                <source src={link} type="video/mp4"/>}
                </video>
        </div>
    )
}
