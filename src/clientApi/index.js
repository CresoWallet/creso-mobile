import {BASE_URL} from '../services/config/backendURL';
import {axiosInstance} from '../services/config/axios';

export const loginApi = async formData => {
  const res = await axiosInstance(`/login`, {
    method: 'POST',
    data: formData,
  });
  return res;
};

export const logOut = async formData => {
  const res = await axiosInstance(`/logout`, {
    method: 'POST',
    data: formData,
  });
  return res;
};

export const signUpAPI = async formData => {
  const res = await axiosInstance(`/signup`, {
    method: 'POST',
    data: formData,
  });

  return res;
};

export const authenticateUser = async formData => {
  const res = await axiosInstance(`/authenticate`, {
    method: 'GET',
    data: formData,
  });

  return res;
};

export const sendOTPMail = async (token, formData) => {
  const res = await axiosInstance(
    `/sendOTP`,
    {
      headers: {
        auth_token: token,
      },
    },
    {
      method: 'POST',
      data: formData,
    },
  );
  return res;
};

export const verifyEmail = async formData => {
  const res = await axiosInstance(`/verify_email`, {
    method: 'POST',
    data: formData,
  });

  return res;
};

// export const getUserDetails = async token => {
//   console.log(token);
//   const res = await axiosInstance(
//     '/users/me',
//     {
//       headers: {
//         'Content-Type': 'application/json',
//         authorization: `authorization  ${token}`,
//       },
//     },
//     {
//       method: 'GET',
//     },
//   );

//   return res;
// };

export const getUserDetails = async token => {
  try {
    console.log(token);
    const res = await axiosInstance.get('/users/me', {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error) {
    throw error;
  }
};
