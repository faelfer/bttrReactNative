import { StyleSheet } from 'react-native';

import { ON_PRIMARY_COLOR, ON_SECONDARY_COLOR } from '../../styles/colors';
import { screenWidth } from '../../utils/resources/dimensions_device';

const styles = StyleSheet.create({
  containerPickerOutlineForm: {
    justifyContent: 'center',
    width: screenWidth * 0.85,
    height: 55,
    marginVertical: 12,
    backgroundColor: ON_SECONDARY_COLOR,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderWidth: 1.5,
    borderColor: ON_PRIMARY_COLOR,
  },

  textPickerOutlineForm: { color: ON_PRIMARY_COLOR, fontSize: 14 },
});

export default styles;
