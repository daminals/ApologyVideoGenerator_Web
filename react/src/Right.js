import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios'

export default function Right(link) {
    const [Response, setResponse] = useState({});
    const [finished, setFinished] = useState(false);
    const accessLink = link["link"];
    const vidRef = useRef();

    useEffect(() => {
        if (!finished){
            var checkLink = accessLink.substring(0, accessLink.length - 4)
            axios.get(checkLink).then(response => {
            console.log("collecting video: ", response)
            if (response.data.message === "FINISHED") {
                setFinished(true);
                axios.post(checkLink, "stop")
                .then(function(response) {
                    console.log(response)
                }).catch(function(error){
                    console.log(error)
                })
            }
            }).catch(error => {
                console.log(error)
            })
        }
    });

    useEffect(()=>{
        let interval
        const fetchData = async (checkLink) => {
            try {
                const response = await fetch(checkLink)
                console.log(checkLink)
                console.log(response)
                console.log(finished)
                const result = await response.json()
                console.log(result)
                if ((+result?.data?.message) === "FINISHED") {  // TODO: read get request output from flask to check when fin
                    setFinished(true);
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
        }, 2 * 1000)
        return () => {
            clearInterval(interval)
        }
    }, [accessLink])

    useEffect(()=>{
        axios.get(accessLink).then(response => {
          console.log("collecting video: ", response)
          setResponse(response);
          console.log(Response)
          if (vidRef.current) {
              vidRef.current.load()
          }
          setFinished(false);
        }).catch(error => {
          console.log(error)
        })
      }, [finished])
        
      return (
        <div className="split right">
          <video ref={vidRef} className="bideo" autoPlay controls={Response.status === 200} loop={Response.status !== 200} muted={Response.status !== 200}>
            <source src={Response.status === 200 ? accessLink : "/loading"}/>
          </video>
        </div>
      )
}
