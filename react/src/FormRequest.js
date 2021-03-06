import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Cookie from 'universal-cookie';

var sorryList = ["stealing candy from a baby","eating bacon on shabbat", "causing the cuban missle crisis"];
export default function FormRequest({setLink}) {
    const cookies = new Cookie();
    const sorRef = useRef();

    function cookieID() {
        var ct = new Date();
        var [year,month,day,hour,min,sec] = [ct.getFullYear(),ct.getMonth(),ct.getDay(),ct.getHours(),ct.getMinutes(),ct.getSeconds()];
        var now = year.toString() + month.toString() + day.toString() + hour.toString() + min.toString() + sec.toString();
        return now
      };

    function js_naming_convention(name) {
        //var conv = [" ","@","#","$","%","^",'*',"(",")","!","<",">","?","/","\\","\"","\'","~",":",";","`","=","+","{","}","|"]
        var new_name = name.replace(/[^\w]/gi, "")
        return new_name
    }

    function pRqst(e){
        e.preventDefault();
        const name = sorRef.current.value
        if (name === '') return
        var conv_name = js_naming_convention(name);
        axios.post("/generator/"+name+"/start"); // TODO: make this post a JSON
        sorRef.current.value = null;
        setLink("/generator/"+conv_name+'/get');
        var cookie_id = cookieID();
        cookies.set(cookie_id, conv_name, {path: '/'});
    }

    return (
        <form>
            <input class="reason formH" ref={sorRef} type="text" placeholder={sorryList[Math.floor(Math.random()*sorryList.length)]} ></input>
            <input class="btn-success formH scale-small" type="submit" value="Build!" onClick={pRqst}></input>
        </form>
    )
}
