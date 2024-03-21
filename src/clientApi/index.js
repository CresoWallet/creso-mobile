import { BASE_URL } from '../services/config/backendURL';
import { axiosInstance } from '../services/config/axios';

export const loginApi = async (formData) => {
  const res = await axiosInstance(`/login`, {
    method: 'POST',
    data: formData,
  });
  return res;
};

export const signUpAPI = async (formData) => {
  const res = await axiosInstance(`/signup`, {
    method: 'POST',
    data: formData,
  });

  return res;
};

export const verifyEmail = async (formData) => {
  const res = await axiosInstance(`/verify_email`, {
    method: 'POST',
    data: formData,
  });

  return res;
};

export const getUserDetails = async (token) => {
  try {
    const res = await axiosInstance.get('/users/me', {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });

    return res;
  } catch (error) {
    throw error;
  }
};

export const resendOTP = async (email) => {
  try {
    const response = await axiosInstance.post('/resend_otp', { email });
    return response;
  } catch (error) {
    return error;
  }
};

export const googleLogin = async () => {
  try {
    const response = await axiosInstance.post('/auth/google');
    return response;
  } catch (error) {
    return error;
  }
};

export const createEOAWallet = async (token, walletName) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      authorization: `authorization ${token}`,
    };
    const response = await axiosInstance.post(
      '/wallet/eoa',
      { walletName },
      { headers },
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const getWalletBalance = async (walletAddress, network) => {
  try {
    const response = await axiosInstance.get(
      `/wallets/${walletAddress}/balance`,
      { network },
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const getTranscitionHistory = async (address, network) => {
  try {
    const response = await axiosInstance.get(
      `/wallets/${address}/transactions`,
      { network },
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const createAAWallet = async (token, body) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      authorization: `authorization ${token}`,
    };
    const response = await axiosInstance.post('/wallet/aa', body, { headers });
    return response;
  } catch (error) {
    return error;
  }
};

export const sendAAWalletTransaction = async (token, body) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      authorization: `authorization ${token}`,
    };
    const response = await axiosInstance.post('/transactions', body, {
      headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getAllEOAWallets = async (token) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      authorization: `authorization ${token}`,
    };
    const response = await axiosInstance.get('/wallets/eoa', { headers });
    return response;
  } catch (error) {
    return error;
  }
};

export const getAAWallets = async (token, address) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      authorization: `authorization ${token}`,
    };
    const response = await axiosInstance.get(`/wallets/aa/${address}`, {
      headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const importEOAWallet = async (token, body) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      authorization: `authorization ${token}`,
    };
    const response = await axiosInstance.post('/wallet/import', body, {
      headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};
