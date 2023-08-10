import instance from ".";
import jwt_decode from "jwt-decode";
import * as SecureStore from "expo-secure-store";

const signup = async (userInfo) => {
  const res = await instance.post("", userInfo);
  return res.data;
};

const signin = async (userInfo) => {
  const res = await instance.post("", userInfo);
  return res.data;
};

const storeToken = async (access) => {
  //   localStorage.setItem("token", access);
  await SecureStore.setItemAsync("token", access);
};

const checkToken = async () => {
  const token = await SecureStore.getItemAsync("token");
  if (token) {
    const decode = jwt_decode(token);

    const currentTime = Date.now() / 10000;
    if (decode.exp < currentTime) {
      localStorage.removeItem("token");
      return false;
    }
    return true;
  }
  return false;
};

const getToken = async () => {
  try {
    const token = await SecureStore.getItemAsync("token");
    return token;
  } catch (error) {
    console.log("Error while trying to get the token", error);
  }
};

const signout = async () => {
  await SecureStore.deleteItemAsync("token");
};

const getAllLaundries = async () => {
  const res = await instance.get("/laundry");
  return res.data;
};

const getLaundryById = async (LaundryId) => {
  const res = await instance.get(`laundry/${LaundryId}`);
  return res.data;
};

export {
  signup,
  signin,
  storeToken,
  checkToken,
  getToken,
  signout,
  getAllLaundries,
  getLaundryById,
};
