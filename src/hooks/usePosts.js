import { useEffect, useState } from 'react';
import { request } from '../helpers';

export const usePosts = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [pagination, setPagination] = useState({
        totalPage: 0,
        indexOfLastPost: 0,
        indexOfFirstPost: 0,
        totalItems: 0,
        postsPerPage: 2,
        page: 1,
    });

    const [post, setPost] = useState({
        loading: false,
        error: null,
    });

    const [createPost, setCreatePost] = useState({
        loading: false,
        error: null,
    });


    useEffect(() => {
        request('/feed/posts?page=' + pagination.page)
            .then(data => {
                setPosts(data.posts);
                setPagination({
                    ...pagination,
                    totalItems: data.totalItems,
                    totalPage: data.totalItems / pagination.postsPerPage,
                    indexOfLastPost: pagination.postsPerPage,
                })
                setLoading(true);
            })
            .catch(err => {
                setError(err.message);
                setLoading(true);
            })
    }, []);


    const addpost = (post) => {

        setCreatePost({
            loading: false,
            error: null,
        });

        request('/feed/post', {
            method: 'POST',
            body: post,
        })
            .then(data => {
                setPosts([data.post, ...posts]);
                setPagination({
                    ...pagination,
                    totalItems: pagination.totalItems + 1,
                });
                setCreatePost({
                    loading: true,
                    error: null,
                });
            })
            .catch(err => {
                setCreatePost({
                    loading: true,
                    error: err.message,
                });
            });
    }

    const postEdit = (post, id) => {
        
        setCreatePost({
            loading: false,
            error: null,
        });

        request('/feed/post/' + id, {
            method: 'PUT',
            body: post,
        })
            .then(data => {
                const updatedPosts = posts.map(p => {
                    if (p._id === data.post._id) {
                        return data.post;
                    }
                    return p;
                });

                setPosts(updatedPosts);
                setCreatePost({
                    loading: true,
                    error: null,
                });
            })
            .catch(err => {
                setCreatePost({
                    loading: true,
                    error: err.message,
                });
            });

    }

    const nextPosts = () => {

        if (posts.length > pagination.indexOfLastPost) {
            setPagination({
                ...pagination,
                indexOfLastPost: pagination.indexOfLastPost + pagination.postsPerPage,
                indexOfFirstPost: pagination.indexOfFirstPost + pagination.postsPerPage,
            });
            return;
        }

        setLoading(false);
        request('/feed/posts?page=' + (pagination.page + 1))
            .then(data => {
                setPosts([...posts, ...data.posts]);
                setLoading(true);
                setPagination({
                    ...pagination,
                    page: pagination.page + 1,
                    indexOfLastPost: pagination.indexOfLastPost + pagination.postsPerPage,
                    indexOfFirstPost: pagination.indexOfFirstPost + pagination.postsPerPage,
                });
            });
    }

    const prevPosts = () => {
        if (pagination.indexOfFirstPost === 0) {
            return;
        }

        setPagination({
            ...pagination,
            indexOfLastPost: pagination.indexOfLastPost - pagination.postsPerPage,
            indexOfFirstPost: pagination.indexOfFirstPost - pagination.postsPerPage,
        });

    }

    return {
        posts, loading, error, post,
        pagination, createPost, postEdit,
        nextPosts, prevPosts, addpost
    };


}
