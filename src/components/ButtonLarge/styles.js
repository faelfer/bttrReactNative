import { StyleSheet } from 'react-native';

import { SECONDARY_COLOR, ON_SECONDARY_COLOR } from '../../styles/colors';
import { screenWidth } from '../../utils/resources/dimensions_device';

const styles = StyleSheet.create({
  buttonLarge: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: screenWidth * 0.85,
    borderRadius: 10,
    backgroundColor: SECONDARY_COLOR,
    paddingVertical: 15,
    marginVertical: 15,
  },

  textButtonLarge: {
    color: ON_SECONDARY_COLOR,
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default styles;
