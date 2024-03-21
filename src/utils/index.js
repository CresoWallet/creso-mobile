import RNFetchBlob from 'rn-fetch-blob';
import { Platform, PermissionsAndroid } from 'react-native';

/// grant permission in android
export const getDownloadPermissionAndroid = async () => {
  try {
    if (Number(Platform.Version) >= 33) {
      return true;
    }

    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);

    console.log('status : ', status);
    return status === 'granted';
    // const granted = await PermissionsAndroid.request(
    //   PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    //   {
    //     title: 'File Download Permission',
    //     message: 'Your permission is required to save Files to your device',
    //     buttonNegative: 'Cancel',
    //     buttonPositive: 'OK',
    //   },
    // );

    // console.log('granted in permisson : ', granted);
    // if (granted === PermissionsAndroid.RESULTS.GRANTED) return true;
  } catch (err) {
    console.log('err', err);
  }
};

export const downloadFile = async (data, filename, title) => {
  const { config, fs } = RNFetchBlob;
  const cacheDir = fs.dirs.DownloadDir;

  const path = `${cacheDir}/${filename}`;

  try {
    const configOptions = Platform.select({
      ios: {
        fileCache: true,
        path: path,
        // appendExt: filename.split('.').pop(),
        appendExt: filename,
      },
      android: {
        fileCache: true,
        path: path,
        // appendExt: filename.split('.').pop(),
        appendExt: filename,
        addAndroidDownloads: {
          fileCache: true,
          //   useDownloadManager: true,
          notification: true,
          path: path,
          description: 'Downloading file...',
          overwrite: true,
          title: { title },
          indicator: true,
        },
      },
    });

    const response = await RNFetchBlob.config(configOptions).fetch('GET', url);

    return response;
  } catch (error) {
    console.error('error : ', error);
    return null;
  }
};

export const writeFile = async (data, filename) => {
  const { fs } = RNFetchBlob;
  const cacheDir = fs.dirs.DownloadDir;

  const path = `${cacheDir}/${filename}`;

  try {
    try {
      await RNFetchBlob.fs.writeFile(path, data, 'utf8');
      console.log('File saved successfully at:', path);
      return path;
    } catch (error) {
      console.error('Error saving file:', error);
      //   return error;
    }
  } catch (error) {
    console.error('error : ', error);
    return null;
  }
};

// export const downloadFile = async () => {
//   const url = 'https://example.com/path/to/your/file.pdf'; // Replace with your file URL
//   try {
//     const response = await RNFetchBlob.config({
//       fileCache: true,
//       path: `${RNFetchBlob.fs.dirs.DownloadDir}/yourfile.pdf`,
//     }).fetch('GET', url);

//     console.log('status : ', response.respInfo.status);

//     if (response.respInfo.status === 200) {
//       return `File downloaded successfully at: ${response.path()}`;
//     } else {
//       //   setStatus(
//       //     `Error downloading file. Status code: ${response.respInfo.status}`,
//       //   );
//       console.log('Response Info:', response.respInfo);
//       return response.respInfo;
//     }

//     // Return the path to the downloaded file
//     return response;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };
