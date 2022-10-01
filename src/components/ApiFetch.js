import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ApiFetch = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://dog.ceo/api/breeds/image/random')
            .then(res => {
                setPosts(res.data)
            })
    }, [])

    return (
        <div>
            <ul>
                {
                    <img src={posts.message} alt="犬の画像"></img>
                }
            </ul>
        </div >
    )
}

export default ApiFetch