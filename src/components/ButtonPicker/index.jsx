/* eslint-disable react/prop-types */
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function ButtonPicker({ label, choiceSelected, onAction }) {
  return (
    <TouchableOpacity
      onPress={() => onAction()}
      style={styles.buttonPicker}
    >
      <Text style={styles.textButtonPicker}>
        {choiceSelected.name !== '' ? choiceSelected.name : label}
      </Text>
    </TouchableOpacity>
  );
}
