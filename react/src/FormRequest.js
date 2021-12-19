import React from 'react'

var sorryList = ["stealing candy from a baby","eating bacon on shabbat", "causing the cuban missle crisis"];
export default function FormRequest() {
    return (
        <form>
            <input class="reason formH" placeholder={sorryList[Math.floor(Math.random()*sorryList.length)]} ></input>
            <input class="btn-success formH" type="submit" value="Build!"></input>
        </form>
    )
}
