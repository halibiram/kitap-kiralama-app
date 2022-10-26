import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Details = ({route}) => {
  const {item} = route.params;
  return (
    <View style={styles.containers}>
      <ImageBackground
        blurRadius={8.7}
        source={item.image}
        style={styles.backgroundImage}>
        <Image source={item.image} style={styles.Image} />
      </ImageBackground>

      <View style={styles.desciptionWrapper}>
        <Text style={styles.bookTitle}>{item.title}</Text>
        <View style={styles.bookAuthorWrapper}>
          <Text style={styles.bookAuthorTitle}>Yazar:</Text>
          <Text style={styles.bookAuthor}>{item.author}</Text>
        </View>
        <View style={styles.publisherWrapper}>
          <Text style={styles.publisherTitle}>Yayinevi:</Text>
          <Text style={styles.publisher}>{item.publisher}</Text>
        </View>
        <View style={styles.stockWrapper}>
          <Text style={styles.stockTitle}>Stok:</Text>
          <Text style={styles.stock}>{item.stock}</Text>
        </View>
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
    paddingLeft: 20,
    left: screenWidth / 2 - 78,
    top: screenHeight * 0.6 - 330,
    height: 227.5,
    width: 156,
    borderRadius: 16,
  },
  desciptionWrapper: {
    backgroundColor: 'green',
    marginTop: -20,
    height: 300,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  bookTitle: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  bookAuthorWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    paddingHorizontal: 15,
  },
  bookAuthorTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookAuthor: {
    color: 'white',
    fontSize: 18,

    marginLeft: 10,
  },
  publisherWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    paddingHorizontal: 15,
  },
  publisherTitle: {color: 'white', fontSize: 18, fontWeight: 'bold'},
  publisher: {
    color: 'white',
    fontSize: 18,

    marginLeft: 10,
  },
  stockWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    paddingHorizontal: 15,
  },
  stockTitle: {color: 'white', fontSize: 18, fontWeight: 'bold'},
  stock: {
    color: 'white',
    fontSize: 18,

    marginLeft: 10,
  },
});
export default Details;
