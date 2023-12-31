/* eslint-disable react/prop-types */
import React from 'react';
import {Input} from '@rneui/themed';

import {ON_PRIMARY_COLOR} from '../../../../styles/colors';
import styles from './styles';

export default function InputSecureForm({
  inputTestID,
  inputPlaceholder,
  onChangeInput,
  inputValue,
  isSecureText = false,
  inputIcon,
}) {
  return (
    <Input
      testID={inputTestID}
      containerStyle={styles.containerInputForm}
      inputContainerStyle={styles.inputContainerForm}
      inputStyle={styles.inputForm}
      placeholderTextColor={ON_PRIMARY_COLOR}
      underlineColorAndroid="transparent"
      placeholder={inputPlaceholder}
      returnKeyType="done"
      onChangeText={text => onChangeInput(text)}
      value={inputValue}
      secureTextEntry={isSecureText}
      autoCapitalize="none"
      rightIcon={inputIcon}
    />
  );
}
