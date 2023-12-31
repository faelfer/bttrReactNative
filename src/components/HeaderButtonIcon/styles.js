import { StyleSheet } from 'react-native';

import { ON_SECONDARY_COLOR } from '../../styles/colors';

const styles = StyleSheet.create({
  buttonHeaderIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});

export default styles;

export const iconFavorite = {
  iconSize: 28,
  iconColor: ON_SECONDARY_COLOR,
  iconType: 'ionicon',
};
