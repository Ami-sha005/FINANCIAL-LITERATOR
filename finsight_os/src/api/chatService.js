import axios from "axios";

const API = `${import.meta.env.VITE_API_BASE_URL}/chat`;

export const sendMessage = async (message) => {

    const response = await axios.post(API, {

        message

    });

    return response.data;

};