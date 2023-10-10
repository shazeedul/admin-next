import { setUser, clearUser } from "./authSlice";

export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await fetch(process.env + "/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    dispatch(setUser(response.data));
  } catch (error) {
    // Handle registration error
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await fetch(process.env + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    dispatch(setUser(response.data));
  } catch (error) {
    // Handle login error
  }
};

export const logoutUser = () => async (dispatch) => {
    try {
        await fetch(process.env + "/logout");
        dispatch(clearUser());
    } catch (error) {
        // Handle logout error
    }
};
