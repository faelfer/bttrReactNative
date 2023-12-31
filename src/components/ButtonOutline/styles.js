import { StyleSheet } from 'react-native';

import { SECONDARY_COLOR } from '../../styles/colors';
import { screenWidth } from '../../utils/resources/dimensions_device';

const styles = StyleSheet.create({
  buttonOutline: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: screenWidth * 0.85,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: SECONDARY_COLOR,
    backgroundColor: 'transparent',
    paddingVertical: 15,
    marginVertical: 15,
  },

  textButtonOutline: {
    color: SECONDARY_COLOR,
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default styles;
