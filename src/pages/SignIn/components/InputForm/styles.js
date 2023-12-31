import {StyleSheet} from 'react-native';

import {ON_PRIMARY_COLOR, ON_SECONDARY_COLOR} from '../../../../styles/colors';
import {screenWidth} from '../../../../utils/resources/dimensions_device';

const styles = StyleSheet.create({
  containerLabelInputForm: {
    flexDirection: 'row',
    width: '82%',
    marginTop: 2,
  },

  labelInputForm: {
    color: ON_PRIMARY_COLOR,
  },

  containerInputForm: {
    paddingTop: 25,
    justifyContent: 'center',
    width: screenWidth * 0.85,
    height: 55,
    marginVertical: 12,
    backgroundColor: ON_SECONDARY_COLOR,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },

  inputContainerForm: {borderBottomWidth: 0},

  inputForm: {color: ON_PRIMARY_COLOR, fontSize: 14},
});

export default styles;
