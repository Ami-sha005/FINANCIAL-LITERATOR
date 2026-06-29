import axios from "axios";

const API = "http://localhost:8080/chat";

export const sendMessage = async (message) => {

    const response = await axios.post(API, {

        message

    });

    return response.data;

};