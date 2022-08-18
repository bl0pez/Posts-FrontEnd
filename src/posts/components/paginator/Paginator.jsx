import { useContext, useEffect, useReducer, useState } from "react";
import PostsContext from "../../../contexts/PostsContext";
import { initialState, paginationReducer } from "../../../reducer/posts/paginationReducer";

export const Paginator = ({ children }) => {

    
    const [state, dispatch] = useReducer(paginationReducer, initialState);
    const { posts:data } = useContext(PostsContext);
    
    const {posts, loading, error} = data;
    
    const [postPorPage, setpostPorPage] = useState(posts)

    useEffect(() => {
        dispatch({ type: 'TOTAL_POSTS', payload: posts.length });
    }, [posts]);

    console.log(postPorPage);
    console.log(state);

    if(loading) return <h1>Loading...</h1>

  return (
    <>
    {children}

    <div className="text-center">
        <button
            type="button"
            className="border border-gray-300 text-gray-500 hover:text-gray-700 hover:border-gray-400 px-4 py-2 rounded-l-md"
        >Prev</button>
        <button
            type="button"
            className="border border-gray-300 text-gray-500 hover:text-gray-700 hover:border-gray-400 px-4 py-2"
        >1</button>
        <button
            type="button"
            className="border border-gray-300 text-gray-500 hover:text-gray-700 hover:border-gray-400 px-4 py-2"
        >2</button>
        <button
            type="button"
            className="border border-gray-300 text-gray-500 hover:text-gray-700 hover:border-gray-400 px-4 py-2"
        >3</button>
        <button
            type="button"
            className="border border-gray-300 text-gray-500 hover:text-gray-700 hover:border-gray-400 px-4 py-2 rounded-r-md"
        >Next</button>
    </div>

    </>
  )
}
