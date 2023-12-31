import {StyleSheet, Platform} from 'react-native';

import {ON_PRIMARY_COLOR, SECONDARY_COLOR, ON_SECONDARY_COLOR} from './colors';

const scrollViewStyles = StyleSheet.create({
  containerContent: {
    alignItems: 'center',
    paddingVertical: 10,
  },

  container: {backgroundColor: SECONDARY_COLOR},

  textMessage: {
    width: '65%',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: ON_PRIMARY_COLOR,
    marginVertical: 10,
  },
});

export default scrollViewStyles;

export const iconRefreshStyles = {
  colors: [SECONDARY_COLOR],
  progressBackground: ON_SECONDARY_COLOR,
  tintColor: Platform.OS === 'ios' ? SECONDARY_COLOR : SECONDARY_COLOR,
};
