/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';

import styles from './styles';
import { ON_SECONDARY_COLOR } from '../../styles/colors';

export default function ButtonRoundedWhatsapp({ onAction }) {
  return (
    <TouchableOpacity
      style={styles.buttonRoundedWhatsapp}
      onPress={() => onAction()}
    >
      <Icon
        name="logo-whatsapp"
        color={ON_SECONDARY_COLOR}
        size={22}
        type="ionicon"
      />
    </TouchableOpacity>
  );
}
