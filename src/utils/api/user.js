import Axios from "axios";
import BASE_URL from ".";

const getUser = async (token) => {
  try {
    const response = await Axios.get(`${BASE_URL}/profile`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const updateProfile = async (token, { username, email, phone, url_photo }) => {
  try {
    const response = await Axios.put(
      `${BASE_URL}/profile`,
      {
        username,
        email,
        phone,
        url_photo,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return {
      data: response.data,
      status: "success",
    };
  } catch (err) {
    console.error(err.message);
  }
};

// admin
const getAllUserForAdmin = async (token) => {
  try {
    const result = await Axios.get(`${BASE_URL}/users`, {
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

export { getUser, updateProfile, getAllUserForAdmin };
