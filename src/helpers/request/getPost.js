export const getPost = async (id) => {

        const request = new Request(`${import.meta.env.VITE_BACKEND_URL}/feed/post/${id}`);
        const resp = await fetch(request);

        if (!resp.ok) {
            const data = await resp.json();
            throw new Error(data.message);
        }

        const data = await resp.json();
        return data;
}