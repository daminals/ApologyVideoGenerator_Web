import React from 'react';

const title="Apology Video Generator";
const description = "An easy way to apologize for what you may or may not have done wrong";
const icon="%PUBLIC_URL%/favicon.ico"
const url="#"

function MetaHead() {
    return (
        <div name="header">
         <meta property="og:title" content={title}/>
         <meta property="og:description" content={description}/>
         <meta property="og:image" content={icon}/>
         <meta property="og:url" content={url}/>
         <meta name="twitter:card" content="summary_large_image"/>

         <meta property="og:site_name" content={title}/>
         <meta name="twitter:image:alt" content={description}/>

         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
         <meta name="description" content={description}/>

        <title>{title}</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        </div>
    )
}

export default MetaHead;