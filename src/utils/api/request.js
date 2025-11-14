import BASE_URL from ".";
import Axios from "axios";

const postrequest = async(token, { user_id, type, request }) => {
    console.log(user_id, type, request)
    try {
        const response = await Axios.post(`${BASE_URL}/requests`, {
            user_id,
            type,
            request
        },{
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${ token }`
            }
        })
        return response.data
    } catch(err) {
        console.log(err);
    }
}

export { postrequest }