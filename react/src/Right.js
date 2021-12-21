import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios'

export default function Right(link) {
    const [Response, setResponse] = useState({});
    const accessLink = link["link"];
    const vidRef = useRef();

    useEffect(()=>{
        axios.get(accessLink).then(response => {
          console.log("collecting video: ", response)
          setResponse(response);
          console.log(Response)
          if (vidRef.current) {
              vidRef.current.load()
          }
        }).catch(error => {
          console.log(error)
        })
      }, [])
        
      return (
        <div className="split right">
          <video ref={vidRef} className="bideo" autoPlay controls={Response.status===200} loop={Response.status !== 200} muted={Response.status !== 200}>
            <source src={Response.status === 200 ? accessLink : "/loading"}/>
          </video>
        </div>
      )
}
