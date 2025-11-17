import BASE_URL from ".";
import Axios from "axios";

const postrequest = async (token, { user_id, type, request }) => {
  console.log(user_id, type, request);
  try {
    const response = await Axios.post(
      `${BASE_URL}/requests`,
      {
        user_id,
        type,
        request,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const getRequest = async (token, userId) => {
  try {
    const response = await Axios.get(`${BASE_URL}/requests/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (err) {
    return {
      status: "error",
      message: err.response.data.message,
      error: err.response.data.error_message,
    };
  }
};

// admin
const getAllRequestForAdmin = async (token) => {
  try {
    const result = await Axios.get(`${BASE_URL}/requests`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const users = await result.data;
    return users;
  } catch (err) {
    return {
      success: false,
      error: err.response.data,
    };
  }
};

export { postrequest, getRequest, getAllRequestForAdmin };
