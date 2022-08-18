import { useEffect, useReducer, useState } from 'react';
import { getPosts } from '../helpers';
import { initialsState, postsReducer } from '../reducer/posts/postsReducer';

export const useGetPosts = () => {
    
    const [ state, dispatch ] = useReducer(postsReducer, initialsState);

    useEffect(() => {
        console.log('renderizado use efect');
        dispatch({type: "POST_LOADING"});
        getPosts()
            .then(posts => {
                dispatch({type: "POSTS_SUCCESS", payload: posts.posts});
            })
            .catch(error => {
                dispatch({type: "POSTS_ERROR", payload: error.message});
            });
    }, []);
    
    return {state, dispatch};


}
