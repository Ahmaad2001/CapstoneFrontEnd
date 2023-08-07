import instance from ".";
import jwt_decode from "jwt-decode";
import * as SecureStore from "expo-secure-store";

const signUp = async (userInfo) => {
  const res = await instance.post("", userInfo);
  return res.data;
};

const signIn = async (userInfo) => {
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

const signOut = async () => {
  await SecureStore.deleteItemAsync("token");
};

const getAllLaundries = async () => {
  const res = await instance.get("");
  return res.data;
};

const getLaundryById = async (LaundryId) => {
  const res = await instance.get(`.../.../${LaundryId}`);
  return res.data;
};

export {
  signUp,
  signIn,
  storeToken,
  checkToken,
  getToken,
  signOut,
  getAllLaundries,
  getLaundryById,
};