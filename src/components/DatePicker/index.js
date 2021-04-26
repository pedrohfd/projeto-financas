import React, { useState } from 'react';
import { Platform, TouchableOpacity, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { Container, Header } from './styles';

const DatePicker = ({ date, onClose, onChange }) => {
  const [dateNow, setDateNow] = useState(new Date(date));

  return (
    <Container>
      {Platform.OS === 'ios' && (
        <Header>
          <TouchableOpacity onPress={onClose}>
            <Text>Fechar</Text>
          </TouchableOpacity>
        </Header>
      )}
      <DateTimePicker
        value={dateNow}
        mode="date"
        display="default"
        style={{ backgroundColor: '#fff' }}
        onChange={(event, data) => {
          const currentDate = data || dateNow;
          setDateNow(currentDate);
          onChange(currentDate);
        }}
      />
    </Container>
  );
};

export default DatePicker;
