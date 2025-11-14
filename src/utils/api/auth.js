import Axios from "axios";
import BASE_URL from "./index.js";

const login = async ({ email, password }) => {
  try {
    const response = await Axios.post(
      `${BASE_URL}/login`,
      { email, password },
      { timeout: 5000 }
    );
    return response.data;
  } catch (err) {
    if (err) {
      return {
        status: "error",
        message: err.response.data,
      };
    }
  }
};

const logout = async (token) => {
  try {
    const response = await Axios.post(`${BASE_URL}/logout`, null, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (err) {
    return {
      status: "error",
      message: err.response,
    };
  }
};

export { login, logout };
