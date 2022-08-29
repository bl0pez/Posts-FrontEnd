export const postUpdate = async(data) => {

    const {title , content , image} = data;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', image);

    const resp = await fetch(`${import.meta.env.VITE_BACKEND_URL}/feed/post`, {
        method: 'PUT',
        body: formData
    });

    const posts = await resp.json();

    return posts;


}