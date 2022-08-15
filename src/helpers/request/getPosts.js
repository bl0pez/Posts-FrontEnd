export const getPosts = async() => {
    const resp = await fetch(`${import.meta.env.VITE_BACKEND_URL}/feed/posts`);
    const data = await resp.json();
    return data;
}
