import React from 'react'

var sorryList = ["stealing candy from a baby","eating bacon on shabbat", "causing the cuban missle crisis"];
export default function FormRequest() {
    return (
        <form>
            <input class="reason" placeholder={sorryList[Math.floor(Math.random()*sorryList.length)]} ></input>
            <input type="submit" value="Build!"></input>
        </form>
    )
}
