import { StyleSheet } from 'react-native';

import { SUCCESS_COLOR, ON_SECONDARY_COLOR } from '../../styles/colors';
import { screenWidth } from '../../utils/resources/dimensions_device';

const styles = StyleSheet.create({
  buttonLargeAlternative: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: screenWidth * 0.85,
    borderRadius: 10,
    backgroundColor: SUCCESS_COLOR,
    paddingVertical: 15,
    marginVertical: 15,
  },

  textButtonLargeAlternative: {
    color: ON_SECONDARY_COLOR,
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default styles;
