/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from '@rneui/themed';

import styles from './styles';
import {
  ON_SECONDARY_COLOR,
  GRADIENT_INSTAGRAM_COLOR,
} from '../../styles/colors';

export default function ButtonRoundedInstagram({ onAction }) {
  return (
    <TouchableOpacity
      style={styles.buttonRoundedInstagram}
      onPress={() => onAction()}
    >
      <LinearGradient
        colors={GRADIENT_INSTAGRAM_COLOR}
        style={styles.buttonGradientInstagram}
      >
        <Icon
          name="logo-instagram"
          color={ON_SECONDARY_COLOR}
          size={22}
          type="ionicon"
        />
      </LinearGradient>
    </TouchableOpacity>
  );
}
