import { useContext, useEffect, useState } from "react"
import AuthContext from "../contexts/AuthContext";
import { request } from "../helpers/request";


const initialState = {
    posts: [],
    totalItems: 0,
    loading: true,
    error: null,
    page: 1,
}

export const usePosts = () => {

    const [statePosts, setStatePosts] = useState(initialState);

    const getPosts = async () => {

        setStatePosts({ ...statePosts, loading: true });

        try {
            const data = await request(`/feed/posts?page=${statePosts.page}`);
            setStatePosts({
                ...statePosts,
                posts: [...statePosts.posts, ...data.posts],
                totalItems: data.totalItems,
                loading: false,
            });
        } catch (error) {
            setStatePosts({
                ...statePosts,
                loading: false,
                error: error.message
            });
        }
    }

    useEffect(() => {
        getPosts();
    }, [statePosts.page]);

    const nextPage = () => {

        if(statePosts.posts.length >= statePosts.totalItems) {
            return;
        }

        setStatePosts({
            ...statePosts,
            page: statePosts.page + 1,
        });
    }


    return {
        statePosts,
        nextPage,
    }

}
