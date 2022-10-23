import * as React from 'react';
import {Text, StyleSheet, View, Image, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import newData from '../assets/data/newData';
import colors from '../assets/colors/colors';
import populerData from '../assets/data/populerData';

Feather.loadFont();
const Home = () => {
  const renderPopulerBookItem = ({item}) => {
    return (
      <View style={styles.populerBookItemWrapper}>
        <Image source={item.image} style={styles.populerBookItemImage} />
        <Text style={styles.populerBookItemTitle}>{item.title}</Text>
        <Text style={styles.populerBookItemAuthor}>{item.author}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {/*Title */}
      {/* <View style={styles.titlesWrapper}>j
        <Text style={styles.titlesTitle}>Hos Geldin</Text>
      </View> */}
      {/* Header */}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Image
            source={require('../assets/images/pImages.jpg')}
            style={styles.profileImage}
          />
          <Feather name="menu" size={24} color={colors.textDark} />
        </View>
      </SafeAreaView>

      {/*Search Area */}
      <View style={styles.searchWrapper}>
        <Feather name="search" size={24} color={colors.textDark} />
        <View style={styles.search}>
          <Text style={styles.searchText}>Kitap veya Yazar ara</Text>
        </View>
      </View>

      {/*Populer Books */}
      <View style={styles.populerBookWrapper}>
        <Text style={styles.populerBookTitle}>Önerilenler</Text>

        <View style={styles.populerBookList}>
          <FlatList
            data={populerData}
            renderItem={renderPopulerBookItem}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 15,
    alignItems: 'center',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 40,
  },
  titlesWrapper: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  titlesTitle: {
    fontFamily: 'Poppins-Medium',
    color: colors.textDark,
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textSecond,
    borderBottomWidth: 2,
  },
  searchText: {
    color: colors.textSecond,
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
  },
  populerBookWrapper: {
    marginTop: 30,
  },
  populerBookTitle: {
    paddingHorizontal: 20,
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
    color: colors.textDark,
    fontSize: 24,
  },
  populerBookList: {},
  populerBookItemWrapper: {
    marginTop: 10,
    paddingHorizontal: 20,
    marginRight: 20,
    width: 164,
    height: 258,
  },
  populerBookItemImage: {
    width: 164,
    height: 251,
    borderRadius: 16,
  },
  populerBookItemTitle: {
    marginTop: -50,
    fontWeight: 'bold',
    fontSize: 11,
    paddingHorizontal: 5,
  },
  populerBookItemAuthor: {
    fontSize: 11,
    paddingHorizontal: 5,
  },
});

export default Home;
