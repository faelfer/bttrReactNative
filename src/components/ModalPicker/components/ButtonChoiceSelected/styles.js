import { StyleSheet } from 'react-native';

import { ON_SECONDARY_COLOR, SURFACE_COLOR } from '../../../../styles/colors';

const styles = StyleSheet.create({
  buttonChoiceSelected: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '80%',
    borderRadius: 10,
    backgroundColor: SURFACE_COLOR,
    padding: 10,
    marginVertical: 8,
  },

  textButtonChoiceSelected: {
    fontWeight: 'bold',
    color: ON_SECONDARY_COLOR,
    fontSize: 14,
  },
});

export default styles;
