/* eslint-disable react/prop-types */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Icon} from '@rneui/themed';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import styles from './styles';

export default function ButtonGoogle({onAction}) {
  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      onAction({
        isSuccess: true,
        message: 'login com google realizado com sucesso.',
        user: {googleId: userInfo.user.id},
      });
    } catch (error) {
      console.log('signInWithGoogle | error: ', error);
      onAction({
        isSuccess: false,
        message: 'login com google realizado com falha.',
        user: null,
      });
    }
  };

  return (
    <TouchableOpacity
      style={styles.buttonGoogle}
      onPress={() => signInWithGoogle()}>
      <Icon
        name="google"
        type="antdesign"
        color="#000000"
        size={20}
        style={styles.iconGoogle}
      />
      <Text style={styles.textButtonGoogle}>Continue com Google</Text>
    </TouchableOpacity>
  );
}
