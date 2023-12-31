/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default function PickerOutlineForm({ placeholder, onAction }) {
  return (
    <TouchableOpacity
      style={styles.containerPickerOutlineForm}
      onPress={() => onAction()}
    >
      <Text style={styles.textPickerOutlineForm}>
        {placeholder}
      </Text>
    </TouchableOpacity>
  );
}
