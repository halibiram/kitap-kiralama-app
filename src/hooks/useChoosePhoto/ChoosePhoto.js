import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Platform, PermissionsAndroid} from 'react-native';

const useChoosePhoto = setFilePath => {
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        {
          console.log(err);
          return false;
        }
      }
    } else return true;
  };
  const requestExternalWritePermissiom = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.log(err);
        alert('Write permision err', err);
      }
      return false;
    } else return true;
  };
  const captureImage = async type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 10,
      videoQuality: 'low',
      durationLimit: 30,
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermissiom();

    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, res => {
        console.log('Response =', res);
        if (res.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (res.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (res.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (res.errorCode == 'others') {
          alert(res.errorMessage);
          return;
        }
        console.log('base64 -> ', res.assets[0].base64);
        console.log('uri -> ', res.assets[0].uri);
        console.log('width -> ', res.assets[0].width);
        console.log('height -> ', res.assets[0].height);
        console.log('fileSize -> ', res.assets[0].fileSize);
        console.log('type -> ', res.assets[0].type);
        console.log('fileName -> ', res.assets[0].fileName);
        setFilePath(res.assets[0]);
      });
    }
  };
  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 10,
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response.assets);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.assets[0].base64);
      console.log('uri -> ', response.assets[0].uri);
      console.log('width -> ', response.assets[0].width);
      console.log('height -> ', response.assets[0].height);
      console.log('fileSize -> ', response.assets[0].fileSize);
      console.log('type -> ', response.assets[0].type);
      console.log('fileName -> ', response.assets[0].fileName);
      setFilePath(response.assets[0]);
    });
  };
  return {captureImage, chooseFile};
};

export default useChoosePhoto;
