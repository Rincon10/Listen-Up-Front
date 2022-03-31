import { postApiclient } from 'components/services/postApiClient';
import React, { useState } from 'react'

const useProfile = () => { 
    const[post, setPost] = useState([]);

    const getPost = () =>{
        postApiclient.getAllPost().then((response) => {setPost(response)}).catch()}
    return {post}; 
}



export default useProfile