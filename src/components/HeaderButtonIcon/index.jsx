/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';

import styles, { iconFavorite } from './styles';

export default function HeaderButtonIcon({
  iconName,
  onAction,
}) {
  return (
    <TouchableOpacity
      style={styles.buttonHeaderIcon}
      onPress={() => onAction()}
    >
      <Icon
        name={iconName}
        color={iconFavorite.iconColor}
        size={iconFavorite.iconSize}
        type={iconFavorite.iconType}
      />
    </TouchableOpacity>
  );
}
