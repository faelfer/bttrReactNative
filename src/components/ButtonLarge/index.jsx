/* eslint-disable react/prop-types */
import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import styles from './styles';
import { ON_SECONDARY_COLOR } from '../../styles/colors';

export default function ButtonLarge({
  label,
  onAction,
  isVisibleLoading = false,
}) {
  return (
    <TouchableOpacity
      style={styles.buttonLarge}
      onPress={() => onAction()}
      disabled={isVisibleLoading}
    >
      {isVisibleLoading ? (
        <ActivityIndicator size="small" color={ON_SECONDARY_COLOR} />
      ) : (
        <Text style={styles.textButtonLarge}>{label}</Text>
      )}
    </TouchableOpacity>
  );
}
