import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  listItem: {
    borderRadius: 20,
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    // flexDirection: 'column',
    backgroundColor: '#fff',
    width: '100%',
    flex: 1,
  },
  metaInfo: {
    marjinLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    color: 'black',
    fontSize: 18,

    width: 200,
    padding: 10,
    fontWeight: '800',
  },
  number: {
    textAlign: 'center',

    justifyContent: 'center',
  },
});
