import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  bookItemWrapper: {
    marginTop: 20,

    marginRight: 12,
    width: 180,
    height: 260,
  },

  bookItemImageBg: {
    width: 180,
    height: 260,
    borderRadius: 12,
  },
  bookItemTitle: {
    marginTop: 211,
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
    marginBottom: -15,

    backgroundColor: '#0D253Cf6',
    paddingHorizontal: 5,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
});
