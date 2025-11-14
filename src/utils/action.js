import { postrequest } from "./api/request";

export const requestPengajuan = async(type, message, navigate) => {
    const token = localStorage.getItem('tokenKey');
    const user = JSON.parse(localStorage.getItem('user'));

    const response = await postrequest(token, {
        user_id: user.id,
        type,
        request: message
    });


    if (response.status === "success") {
        navigate("/dashboard")
    }

    console.log(response)
}