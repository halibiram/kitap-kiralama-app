import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  Container: {
    flex: 1,
  },
  inputContainer: {
    borderWidth: 8,
    borderColor: 'gray',
    borderRadius: 2,
    margin: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputText: {
    //textAlign: 'center',
    color: 'gray',
    fontSize: 25,
  },
  Button: {
    marginTop: 50,
    alignItems: 'center',
  },
});
