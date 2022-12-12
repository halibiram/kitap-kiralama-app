import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    flex: 1,
  },
  Aisle: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  BookCase: {
    height: 80,
    width: 90,
    backgroundColor: 'gray',
  },
  title: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
  },
  AisleWrapper: {},
  AisleTitle: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 40,
  },
});
