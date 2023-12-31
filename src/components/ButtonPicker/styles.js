import { StyleSheet } from 'react-native';

import { ON_SECONDARY_COLOR, SURFACE_COLOR } from '../../styles/colors';

const styles = StyleSheet.create({
  buttonPicker: {
    width: '85%',
    marginVertical: 12,
    color: ON_SECONDARY_COLOR,
    backgroundColor: SURFACE_COLOR,
    borderRadius: 8,
    fontSize: 14,
    paddingHorizontal: 14,
    paddingVertical: 14,
    justifyContent: 'center',
    borderBottomWidth: 0,
  },
  textButtonPicker: {
    color: ON_SECONDARY_COLOR,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;
