import CryptoJS from 'react-native-crypto-js';

export const encryptData = (data, key) => {
  try {
    // let dataToBeEncrypted;

    // if (typeof data === 'string') dataToBeEncrypted = data;
    // else if (typeof data === 'number') dataToBeEncrypted = data.toString();

    return CryptoJS.AES.encrypt(data, key).toString();
  } catch (err) {}
};

export const decryptData = (encryptedData, key) => {
  try {
    var decryptedBytes = CryptoJS.AES.decrypt(encryptedData, key);
    return decryptedBytes.toString(CryptoJS.enc.Utf8);
  } catch (err) {
    // console.log(err);
  }
};
