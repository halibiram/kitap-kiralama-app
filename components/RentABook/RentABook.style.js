import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  bookDetails: {
    flexDirection: 'row',
    padding: 15,
    margin: 15,
    marginTop: 30,
  },
  image: {
    width: 100,
    height: 160,
  },
  bookInfoContainer: {
    flex: 1,
    flexDirection: 'column',

    padding: 20,
  },
  bookTitle: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  authorTitle: {
    marginTop: 15,
    fontSize: 20,
    fontStyle: 'italic',
  },
  buttonContainer: {
    flexDirection: 'row',

    justifyContent: 'space-around',
    margin: 10,
    marginTop: 70,
  },
  dateContainer: {
    marginTop: 30,
  },
  dateTitle: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    // height: 40,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'red',
    fontSize: 24,
    padding: 3,
    margin: 8,
    fontWeight: '500',
  },
});
