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
            if (response.data.status === "FINISHED") {
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
        const fetchData = async () => {
            var checkLink = accessLink.substring(0, accessLink.length - 4)
            try {
                const response = await fetch(checkLink)
                setFinished((response.data.status === "FINISHED"))
            }catch (error) {
                console.log("error", error)
            }
        }
        fetchData()
        interval = setInterval(() => {
            fetchData()
        }, 5*1000)
        return() => {
            clearInterval(interval)
        }
    }, [])

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
