import { StyleSheet } from 'react-native';

import { ON_PRIMARY_COLOR, ERROR_COLOR } from '../../styles/colors';

const styles = StyleSheet.create({
  containerLabelInputForm: {
    flexDirection: 'row',
    width: '85%',
    marginTop: 2,
  },

  textLabelInputForm: { color: ON_PRIMARY_COLOR },

  textLabelInputFormMandatoryAsterisk: { color: ERROR_COLOR },
});

export default styles;
