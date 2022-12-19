import {Text, View, Modal, Dimensions, TouchableOpacity} from 'react-native';
import {styles} from './ChoosePopUp.style';
import Btn from '../loginScreen/Btn';

export default ChosePhotoType = ({
  visible,
  setVisible,
  capturePhoto,
  choosePhotoFile,
}) => {
  screen_Width = Dimensions.get('window').width;
  screen_Height = 150;
  return (
    <View style={styles.Container}>
      <Modal
        transparent={true}
        animationType="slide"
        bgColor="red"
        visible={visible}
        onRequestClose={!visible}>
        <View style={styles.btn}>
          <View style={{marginTop: 20}}>
            <Btn
              bgColor="black"
              btnLabel="Fotograf cek"
              textColor="white"
              Press={() => capturePhoto('photo')}
              Width={380}
            />
          </View>
          <Btn
            bgColor="black"
            btnLabel="Fotograf sec"
            textColor="white"
            Press={() => choosePhotoFile('photo')}
            Width={380}
          />
          <Btn
            bgColor="black"
            btnLabel="Iptal"
            textColor="white"
            Press={() => setVisible(false)}
            Width={380}
          />
        </View>
      </Modal>
    </View>
  );
};
