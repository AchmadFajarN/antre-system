import BASE_URL from "./index.js"
import axios from "axios";

export async function getCurrentRequestValue(token)  {
    try {
        const response = await axios.get(`${ BASE_URL }/dashboard`, {
            headers: {
                Authorization: `Bearer ${ token }`
            }
        });

        return response.data
    } catch(err) {
        console.error(err);
    }
}