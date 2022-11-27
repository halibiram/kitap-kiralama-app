import {Text, TouchableOpacity} from 'react-native';
import moment from 'moment';

export function DateButton({date, setOpen}) {
  return (
    <TouchableOpacity
      onPress={() => setOpen(true)}
      style={{
        borderWidth: 2,
        borderColor: 'green',
        width: 300,
        borderRadius: 7,
        margin: 60,
        padding: 15,
      }}>
      <Text style={{fontSize: 40, fontWeight: 'bold', textAlign: 'center'}}>
        {moment(date).format('DD/MM/YYYY')}
      </Text>
    </TouchableOpacity>
  );
}
