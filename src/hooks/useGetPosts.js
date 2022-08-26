import { useEffect, useReducer, useState } from 'react';
import { getPosts } from '../helpers';
import { initialsState, postsReducer } from '../reducer/posts/postsReducer';

export const useGetPosts = () => {
    
    const [ state, dispatch ] = useReducer(postsReducer, initialsState);

    useEffect(() => {
        dispatch({type: "POST_LOADING"});
        getPosts(state.page)
            .then(posts => {
                dispatch({type: "POSTS_SUCCESS", payload: posts});
            })
            .catch(error => {
                dispatch({type: "POSTS_ERROR", payload: error.message});
            });
    }, []);
    
    return {state, dispatch};


}
