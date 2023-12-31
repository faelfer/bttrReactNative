/* eslint-disable react/prop-types */
import React from 'react';
import {
  appleAuth,
  AppleButton,
} from '@invertase/react-native-apple-authentication';

import styles from './styles';

export default function ButtonGoogle({onAction}) {
  async function signInWithApple() {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });
      console.log(
        'signInWithApple | appleAuthRequestResponse: ',
        appleAuthRequestResponse,
      );

      const credentialState = await appleAuth.getCredentialStateForUser(
        appleAuthRequestResponse.user,
      );
      if (credentialState === appleAuth.State.AUTHORIZED) {
        onAction({
          isSuccess: true,
          message: 'login com apple realizado com sucesso.',
          user: {
            appleId: appleAuthRequestResponse.user,
            email: appleAuthRequestResponse.email,
          },
        });
      } else {
        onAction({
          isSuccess: false,
          message: 'login com apple realizado com falha.',
          user: null,
        });
      }
    } catch (error) {
      console.log('signInWithApple | error: ', error);
      onAction({
        isSuccess: false,
        message: 'login com apple realizado com falha.',
        user: null,
      });
    }
  }

  return (
    <AppleButton
      buttonStyle={AppleButton.Style.BLACK}
      buttonType={AppleButton.Type.SIGN_IN}
      style={styles.buttonApple}
      onPress={() => signInWithApple()}
    />
  );
}
