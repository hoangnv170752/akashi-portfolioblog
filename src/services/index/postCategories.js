import axios from "axios";

export const getAllCategories = async () => {
    try {
        const { data } = await axios.get(`/api/post-categories`);
        return data;
    } catch (err) {
        if (err.response && err.response.data.message) {
            throw err.response.data.message;
        }
        throw new Error(err.response);
    }
}