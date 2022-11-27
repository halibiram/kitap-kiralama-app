import {Text, TouchableOpacity, View, ImageBackground} from 'react-native';
import populerBookStyles from './PopulerBookCard.styles';
import lastBookStyles from './LastBookCard.styles';

const BookCard = (item, url, navigation, isPopuler) => {
  const styles = isPopuler ? populerBookStyles : lastBookStyles;

  return (
    <TouchableOpacity
      key={item.kitapNo}
      onPress={() =>
        navigation.navigate('Book', {
          screen: 'Details',
          params: {item: item},
        })
      }>
      <View>
        <ImageBackground
          source={{uri: url + item.kapakresmi}}
          imageStyle={styles.bookItemImageBg}
          style={[
            styles.bookItemWrapper,
            {marginLeft: item.id === 1 ? 20 : 0},
          ]}>
          <Text style={styles.bookItemTitle}>{item.adi}</Text>
          <Text style={styles.bookItemAuthor}>{item.yazar}</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};
export default BookCard;
