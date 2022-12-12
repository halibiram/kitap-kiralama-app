import {StyleSheet} from 'react-native';
import colors from '../../assets/colors/colors';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    //alignItems: 'center',
  },
  scrollView: {},
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
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
  },
  search: {
    flex: 1,
    marginLeft: 10,

    borderBottomColor: colors.textSecond,
  },
  searchText: {
    color: colors.textSecond,
    paddingHorizontal: 20,
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: '#101010',
    marjinTop: 60,
    fontWeight: '700',
  },
  listItem: {
    borderRadius: 20,
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '100%',
  },
  isLoadingWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverImage: {
    width: 70,
    height: 100,
    borderRadius: 8,
  },
  metaInfo: {
    marginLeft: 10,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    color: colors.textDark,
    fontSize: 15,
    width: 200,
    padding: 10,
  },
});
