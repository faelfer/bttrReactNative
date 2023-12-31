import { StyleSheet } from 'react-native';

import { SECONDARY_COLOR } from '../../styles/colors';
import { screenWidth } from '../../utils/resources/dimensions_device';

const styles = StyleSheet.create({
  buttonTransparent: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: screenWidth * 0.85,
    borderRadius: 10,
    backgroundColor: 'transparent',
    paddingVertical: 10,
    marginVertical: 10,
  },

  textButtonTransparent: {
    color: SECONDARY_COLOR,
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default styles;
