/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

export default function CartDetailDetail({ label, isMandatory = true }) {
  return (
    <View style={styles.containerLabelInputForm}>
      <Text style={styles.textLabelInputForm}>
        {label}
      </Text>
      {isMandatory ? (
        <Text style={styles.textLabelInputFormMandatoryAsterisk}> *</Text>
      ) : null}
    </View>
  );
}
