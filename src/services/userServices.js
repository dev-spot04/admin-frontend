import axios from "axios";
import { ADMIN_LOGIN } from "../constant/constants";

const getAdmin = async (currentUser) => {
  const response = await axios.get(ADMIN_LOGIN, {
    headers: {
      Authorization: `Bearer ${currentUser.data.token}`,
    },
  });
  return response.data;
};


const userServices = { getAdmin};

export default userServices;
