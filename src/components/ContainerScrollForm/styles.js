import { StyleSheet } from 'react-native';

import { PRIMARY_COLOR, SECONDARY_COLOR, ERROR_COLOR } from '../../styles/colors';

const styles = StyleSheet.create({
  containerKeyboardAvoiding: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
  },

  containerLabelInputForm: {
    flexDirection: 'row',
    width: '85%',
    marginTop: 2,
  },

  textLabelInputForm: { color: SECONDARY_COLOR },

  textLabelInputFormMandatoryAsterisk: { color: ERROR_COLOR },
});

export default styles;
