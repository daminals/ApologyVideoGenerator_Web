import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios'

export default function Right(link) {
    const [Response, setResponse] = useState({});
    const [finished, setFinished] = useState(false);
    const accessLink = link["link"];
    const vidRef = useRef();

    function reloadVideo() {
        axios.get(accessLink).then(response => {
            //console.log("collecting video: ", response)
            setResponse(response);
            if (vidRef.current) {
                vidRef.current.load()
            }
            setFinished(false);
          }).catch(error => {
            console.log(error)
          })  
    }

    useEffect(()=>{
        let interval
        const fetchData = async (checkLink) => {
            try {
                const response = await fetch(checkLink)
                const result = await response.json()
                console.log(checkLink)
                //console.log(result["message"])
                console.log(finished)
                if ((result["message"]) === "FINISHED") { 
                    setFinished(true);
                    reloadVideo();
                    // cancelled
                    axios.post(checkLink, "stop")
                    .then(function(response) {
                        console.log(response)
                    }).catch(function(error){
                        console.log(error)
                    })    
                }
            }catch (error) {
                console.log("error", error)
            }
        }
        interval = setInterval(() => {
            var checkLink = link["link"].substring(0, link["link"].length - 4)
            fetchData(checkLink)
        }, 3 * 1000)
        return () => {
            clearInterval(interval)
        }
    }, [accessLink])
        
      return (
        <div className="split right">
          <video ref={vidRef} className="bideo" autoPlay controls={Response.status === 200} loop={Response.status !== 200} muted={Response.status !== 200}>
            <source src={Response.status === 200 ? accessLink : "/loading"}/>
          </video>
        </div>
      )
}
