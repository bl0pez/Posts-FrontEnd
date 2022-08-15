import { useEffect, useState } from 'react';
import { getPosts } from '../helpers/request/getPosts';

export const useGetPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getPosts()
        .then(data => {
            setPosts(data.posts);
            setLoading(false);
        }).catch(err => {
            setError(err);
            setLoading(false);
        });
    }, []);
    

    return { posts, loading, error };


}
