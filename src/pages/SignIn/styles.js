import {StyleSheet} from 'react-native';

import {ON_PRIMARY_COLOR} from '../../styles/colors';
import {screenWidth} from '../../utils/resources/dimensions_device';

const styles = StyleSheet.create({
  imageLogo: {
    // backgroundColor: 'green',
    width: screenWidth * 0.9,
    height: screenWidth * 0.35,
  },
  containerForgotPassword: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: screenWidth * 0.85,
    marginVertical: 5,
  },
  textForgotPassword: {
    fontSize: 13,
    fontWeight: '600',
    color: ON_PRIMARY_COLOR,
  },
  containerLineOr: {
    // backgroundColor: 'pink',
    width: screenWidth * 0.85,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  containerLine: {
    borderBottomWidth: 1,
    borderColor: 'black',
    width: '40%',
    borderRadius: 4,
  },
  textOr: {
    height: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: ON_PRIMARY_COLOR,
  },
  containerSignUp: {
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 5,
  },
  textSignUp: {
    marginLeft: 5,
    color: ON_PRIMARY_COLOR,
  },
  textToRedirectSignUpScreen: {
    fontWeight: 'bold',
    marginLeft: 5,
    color: ON_PRIMARY_COLOR,
  },
  textToRedirectGuestScreen: {
    marginVertical: 5,
    fontWeight: 'bold',
    color: ON_PRIMARY_COLOR,
  },
});

export default styles;
