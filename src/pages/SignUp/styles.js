import {StyleSheet} from 'react-native';

import {PRIMARY_COLOR, ON_PRIMARY_COLOR} from '../../styles/colors';

const styles = StyleSheet.create({
  containerTextTermsOfUse: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'green',
    marginVertical: 3,
    width: '94%',
  },

  containerCheckbox: {backgroundColor: PRIMARY_COLOR},

  textTermsOfUse: {
    color: ON_PRIMARY_COLOR,
    // backgroundColor: 'red',
    marginLeft: -18,
  },

  linkTextTermsOfUse: {
    color: ON_PRIMARY_COLOR,
    borderBottomWidth: 1,
    borderColor: ON_PRIMARY_COLOR,
    fontWeight: 'bold',
  },
});

export default styles;
