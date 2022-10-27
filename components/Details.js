import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Details = ({route, navigation}) => {
  const [heartActive, setHeartActive] = useState(false);

  const {item} = route.params;
  return (
    <View style={styles.containers}>
      <ImageBackground
        blurRadius={8.7}
        source={{uri: item.kapakresmi}}
        style={styles.backgroundImage}>
        <Image source={{uri: item.kapakresmi}} style={styles.Image} />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={45} />
        </TouchableOpacity>
        <Text style={styles.bookTitle}>{item.adi}</Text>
      </ImageBackground>

      <View style={styles.desciptionWrapper}>
        <View style={styles.heartWrapper}>
          <TouchableOpacity onPress={() => setHeartActive(!heartActive)}>
            <Entypo
              name="heart"
              size={32}
              color={heartActive ? 'red' : 'gray'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bookAuthorWrapper}>
          <Text style={styles.bookAuthorTitle}>Yazar:</Text>
          <Text style={styles.bookAuthor}>{item.yazar}</Text>
        </View>
        <View style={styles.publisherWrapper}>
          <Text style={styles.publisherTitle}>Yayinevi:</Text>
          <Text style={styles.publisher}>{item.yayinevi}</Text>
        </View>
        <View style={styles.stockWrapper}>
          <Text style={styles.stockTitle}>Stok:</Text>
          <Text style={styles.stock}>{item.kitapNo}</Text>
        </View>
        <TouchableOpacity
          onPress={() => alert('Yakinda burada olacak!')}
          style={styles.buttonWrapper}>
          <Text style={styles.buttonTitle}>Kitap Nerede?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert('Kiralama sistemi aktif degil!')}
          style={[styles.buttonWrapper, {backgroundColor: 'green'}]}>
          <Text style={styles.buttonTitle}>Kirala</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundImage: {
    height: screenHeight * 0.6,
    width: '100%',
  },
  Image: {
    left: screenWidth / 2 - 78,
    top: screenHeight * 0.6 - 350,
    height: 227.5,
    width: 156,
    borderRadius: 16,
  },
  desciptionWrapper: {
    backgroundColor: 'white',

    marginTop: -25,
    height: 300,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  heartWrapper: {
    position: 'absolute',
    right: 40,
    top: -30,
    width: 64,
    height: 64,
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  bookTitle: {
    fontFamily: 'AkayaTelivigala-Regular',
    marginTop: 35,
    textAlign: 'center',
    fontSize: 35,
    color: 'black',
  },
  bookAuthorWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    paddingHorizontal: 15,
  },
  bookAuthorTitle: {
    color: 'black',
    marginTop: 1,
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
  },
  bookAuthor: {
    fontFamily: 'Courgette-Regular',
    color: 'black',
    fontSize: 18,

    marginLeft: 10,
  },
  publisherWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    paddingHorizontal: 15,
  },
  publisherTitle: {
    color: 'black',
    fontSize: 18,

    fontFamily: 'Poppins-Medium',
  },
  publisher: {
    color: 'black',
    fontSize: 18,

    fontFamily: 'Courgette-Regular',
    marginLeft: 10,
  },
  stockWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    paddingHorizontal: 15,
  },
  stockTitle: {
    color: 'black',
    fontSize: 18,

    fontFamily: 'Poppins-Medium',
  },
  stock: {
    fontFamily: 'Courgette-Regular',
    color: 'black',
    fontSize: 18,

    marginLeft: 10,
  },
  buttonWrapper: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: 'orange',

    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 30,
  },
  buttonTitle: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
});
export default Details;
