export const request = async(url, options) => {
    const res = await fetch(import.meta.env.VITE_BACKEND_URL + url, options);
    const data = await res.json();
    
    if (!res.ok) {
        throw new Error(data.message || 'Something went wrong!');
    }

    return data;

}