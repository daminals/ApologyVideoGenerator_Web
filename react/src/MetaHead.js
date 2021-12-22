import React from 'react';

const title="Apology Video Generator";
const description = "An easy way to apologize for what you may or may not have done wrong";
const icon="%PUBLIC_URL%/favicon.ico"
const url="#"
function MetaHead() {
    return (
        <div className="header">
        <title>{title}</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        </div>
    )
}

export default MetaHead;