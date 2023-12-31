/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function ButtonChoice({ label, onAction }) {
  return (
    <TouchableOpacity
      style={styles.buttonChoiceSelected}
      onPress={() => onAction()}
    >
      <Text style={styles.textButtonChoiceSelected}>{label}</Text>
    </TouchableOpacity>
  );
}
