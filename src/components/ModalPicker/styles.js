import { StyleSheet } from 'react-native';

import { ON_SECONDARY_COLOR, SURFACE_COLOR } from '../../styles/colors';
import { screenHeight, screenWidth } from '../../utils/resources/dimensions_device';

const styles = StyleSheet.create({
  centeredView: {
    height: screenHeight * 0.88,
    width: screenWidth,
    marginTop: screenHeight * 0.065,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: ON_SECONDARY_COLOR,
  },

  textModalPicker: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 14,
    color: SURFACE_COLOR,
  },

  containerModalPicker: {
    width: '100%',
    height: '77%',
  },

  contentContainerModalPicker: {
    alignItems: 'center',
  },

  textMessageNotFound: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    width: '85%',
  },

  containerInputForm: {
    paddingTop: 25,
    justifyContent: 'center',
    width: '85%',
    height: 48,
    marginVertical: 12,
    backgroundColor: ON_SECONDARY_COLOR,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: SURFACE_COLOR,
    paddingLeft: 12,
    paddingRight: 2,
    paddingVertical: 12,
  },

  inputContainerForm: { borderBottomWidth: 0 },

  inputForm: { color: SURFACE_COLOR, fontSize: 14 },
});

export default styles;
