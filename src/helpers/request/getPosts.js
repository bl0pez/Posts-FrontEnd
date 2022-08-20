export const getPosts = async(page) => {

    console.log(page);

    const resp = await fetch(`${import.meta.env.VITE_BACKEND_URL}/feed/posts?page=${page}`);
    const data = await resp.json();
    return data;
}
