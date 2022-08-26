import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../helpers/request/getPost";
import { initialsStatePost, postReducer } from "../reducer/posts/postReducer"

export const useGetPost = (id) => {
    const [ state, dispatch ] = useReducer(postReducer, initialsStatePost);
    
    useEffect(() => {
        dispatch({ type: "POST_LOADING" });
        getPost(id)
        .then(({post}) => {
            dispatch({ type: "POST_SUCCESS", payload: post });
        })
        .catch(error => {
            dispatch({ type: "POST_ERROR", payload: error.message });
        })
    }, [])
    

    return {
        ...state,
    }

}
