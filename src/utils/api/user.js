import Axios from 'axios';
import BASE_URL from '.';

const getUser = async(token) => {
    try {
        const response = await Axios.get(`${BASE_URL}/profile`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${ token }`
            }
        });

        return response.data
    } catch(err) {
        console.log(err)
    }
} 

export { getUser }