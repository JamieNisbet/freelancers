import { freelancerApi, setAuthToken } from "../../axios/index";
import * as URL from '../../utils/apiEndpoints';
import toast from 'react-hot-toast';
import { setUser, setPlatform } from "../authReducer"
import { setErrors } from "../errorReducer"

export const loginUser = (userData) => (dispatch) => {
    freelancerApi
      .post(URL.LOGIN, userData)
      .then((res) => {
        const { token } = res.data;
        toast.success("Logged in")
        setAuthToken(token);
        dispatch(setUser(res.data.user));
        dispatch(setPlatform(res.data.user.platforms))
      })
      .catch((err) => {
        toast.error("Invalid Credentials")
        dispatch(setErrors(err))
      }
      );
  };
  