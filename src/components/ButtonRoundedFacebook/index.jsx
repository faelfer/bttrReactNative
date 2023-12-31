/* eslint-disable react/prop-types */
import React from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import { Icon } from '@rneui/themed';

import styles from './styles';
import { ON_SECONDARY_COLOR } from '../../styles/colors';

export default function ButtonRoundedFacebook({ onAction }) {
  return (
    <TouchableOpacity
      style={styles.buttonRoundedFacebook}
      onPress={() => onAction()}
    >
      <Icon
        name="facebook"
        color={ON_SECONDARY_COLOR}
        size={21}
        type="font-awesome"
      />
    </TouchableOpacity>
  );
}
