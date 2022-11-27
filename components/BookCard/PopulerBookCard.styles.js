import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  bookItemWrapper: {
    marginTop: 10,

    marginRight: 20,
    width: 136,
    height: 215,
  },

  bookItemImageBg: {
    width: 136,
    height: 209,
    borderRadius: 12,
  },
  bookItemTitle: {
    marginTop: 160,
    height: 30,
    fontFamily: 'Poppins-Regular',
    fontSize: 9,
    color: 'white',
    backgroundColor: '#0D253Ca0',
    paddingHorizontal: 5,
    // borderTopRightRadius: 8,
    // borderTopLeftRadius: 8,
  },
  bookItemAuthor: {
    fontSize: 9,
    padding: 3,

    color: 'white',

    backgroundColor: '#0D253Cf6',
    paddingHorizontal: 5,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
});
