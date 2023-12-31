/* eslint-disable react/prop-types */
import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import styles from './styles';
import { ON_SECONDARY_COLOR } from '../../styles/colors';

export default function ButtonLargeVariant({
  label,
  onAction,
  isVisibleLoading = false,
}) {
  return (
    <TouchableOpacity
      style={styles.buttonLargeVariant}
      onPress={() => onAction()}
      disabled={isVisibleLoading}
    >
      {isVisibleLoading ? (
        <ActivityIndicator size="small" color={ON_SECONDARY_COLOR} />
      ) : (
        <Text style={styles.textButtonLargeVariant}>{label}</Text>
      )}
    </TouchableOpacity>
  );
}
