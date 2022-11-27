import DatePicker from 'react-native-date-picker';

export function SetDatePicker({date, setDate, setOpen, open}) {
  return (
    <DatePicker
      modal
      open={open}
      date={date}
      mode={'date'}
      minimumDate={new Date()}
      onConfirm={date => {
        setOpen(false);
        setDate(date);
      }}
      onCancel={() => {
        setOpen(false);
      }}
    />
  );
}
