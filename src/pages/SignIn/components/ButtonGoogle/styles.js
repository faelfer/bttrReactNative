import {StyleSheet} from 'react-native';

import {screenWidth} from '../../../../utils/resources/dimensions_device';

const styles = StyleSheet.create({
  buttonGoogle: {
    backgroundColor: '#FFFFFF',
    width: screenWidth * 0.9,
    paddingVertical: 8,
    marginVertical: 14,
    justifyContent: 'flex-start',
    borderRadius: 10,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    flexDirection: 'row',
  },
  textButtonGoogle: {
    color: '#000000',
    fontSize: 12,
    alignSelf: 'center',
  },
  iconGoogle: {
    paddingRight: 10,
    marginLeft: 83,
  },
});

export default styles;
