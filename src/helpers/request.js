export const request = async(url, options) => {
    const req = new Request(import.meta.env.VITE_BACKEND_URL + url, options);

    const resp = await fetch(req);
    
    if (!resp.ok) {
        const data = await resp.json();
        throw new Error(data.message);
    }

    const data = await resp.json();
    return data;

}