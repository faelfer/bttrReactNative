import { StyleSheet } from 'react-native';

import { SURFACE_COLOR } from '../../../../styles/colors';

const styles = StyleSheet.create({
  buttonChoice: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '80%',
    borderRadius: 10,
    backgroundColor: 'transparent',
    borderColor: SURFACE_COLOR,
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 8,
  },

  textButtonChoice: {
    fontWeight: 'bold',
    color: SURFACE_COLOR,
    fontSize: 14,
  },
});

export default styles;
