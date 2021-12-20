import React from 'react'
import FormRequest from './FormRequest';

export default function Left() {
    return (
        <div class="split left text-center">
            <h1> What are you apologizing for?</h1>
            <FormRequest></FormRequest>
            <div class="flex explain">
                <p>
                    A problem our generation faces is the need to apologize for the horrible things we have done. Youtube sensations do so many horrible things, and apologize in such a generic and uniform way, the apology video has become its own unique genre.

                    In the interest of efficiency, input your reason for apology and watch your video be automatically generated!
                </p>
            </div>
        </div>
    )
}
