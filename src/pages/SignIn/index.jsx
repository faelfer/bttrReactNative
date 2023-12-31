import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/themed';
import {useDispatch, useSelector} from 'react-redux';

import showFlashMessage from '../../utils/showFlashMessage';
import emailIsInvalid from '../../utils/validation/emailIsInvalid';

import ButtonLarge from '../../components/ButtonLarge';
import ModalNotFound from '../../components/ModalNotFound';
import ContainerScrollForm from '../../components/ContainerScrollForm';
import InputForm from './components/InputForm';

import {SignInFetch, changeIsVisitor} from '../../store/user/actions';

import styles from './styles';
import {
  ON_PRIMARY_COLOR,
  ERROR_COLOR,
  SUCCESS_COLOR,
} from '../../styles/colors';
// import ButtonGoogle from './components/ButtonGoogle';
// import ButtonApple from './components/ButtonApple';

const reiDoGasLogomarca = require('../../../assets/rei_do_gas_logomarca.png');

export default function SignIn() {
  const {isLoadingUser} = useSelector(state => state.user);
  const [isVisiblePassword, setIsVisiblePassword] = useState(true);
  const [isEmailInvalid, setIsEmailInvalid] = useState(true);
  const [isVisibleModalApple, setIsVisibleModalApple] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigation = useNavigation();

  function validateSignIn() {
    let message = '';

    if (!email) {
      message = 'Preencha o campo e-mail';
    } else if (isEmailInvalid) {
      message = 'Campo e-mail é inválido';
    } else if (!password) {
      message = 'Preencha o campo senha';
    }

    return {isInvalid: !!message, message};
  }

  const sendSignIn = async () => {
    const responseValidateSignIn = await validateSignIn();
    console.log(
      'sendSignIn | responseValidateSignIn: ',
      responseValidateSignIn,
    );

    if (responseValidateSignIn.isInvalid) {
      showFlashMessage('Aviso', responseValidateSignIn.message, 'danger');
    } else {
      try {
        dispatch(SignInFetch(email, password));
      } catch (error) {
        console.log('sendSignIn | error: ', error);
        showFlashMessage(
          'Aviso',
          'no momento esse recurso está indisponível, tente novamente mais tarde.',
          'danger',
        );
      }
    }
  };

  async function sendSignInWithApple(responseApple) {
    console.log('sendSignInWithApple | responseApple: ', responseApple);
    try {
      if (responseApple.isSucess) {
        dispatch(
          SignInFetch(responseApple.user.appleId, responseApple.user.email),
        );
      } else {
        showFlashMessage('Aviso', responseApple.message, 'danger');
      }
    } catch (error) {
      console.log('sendSignInWithApple | error: ', error);
      showFlashMessage(
        'Aviso',
        'no momento esse recurso está indisponível, tente novamente mais tarde.',
        'danger',
      );
    }
  }

  async function sendSignInWithGoogle(responseApple) {
    console.log('sendSignInWithGoogle | responseApple: ', responseApple);
    try {
      if (responseApple.isSucess) {
        dispatch(SignInFetch(responseApple.user.googleId));
      } else {
        showFlashMessage('Aviso', responseApple.message, 'danger');
      }
    } catch (error) {
      console.log('sendSignInWithGoogle | error: ', error);
      showFlashMessage(
        'Aviso',
        'no momento esse recurso está indisponível, tente novamente mais tarde.',
        'danger',
      );
    }
  }

  function renderInputIcon(iconName, iconColor, onActionIcon) {
    return (
      <Icon
        name={iconName}
        type="ionicon"
        color={iconColor}
        onPress={() => onActionIcon()}
      />
    );
  }

  return (
    <ContainerScrollForm
      scrollTestID="SignInScrollID"
      isRefreshing={false}
      onRefreshControl={() => console.log('test')}>
      <Image
        source={reiDoGasLogomarca}
        style={styles.imageLogo}
        resizeMode="contain"
      />

      <InputForm
        inputTestID="TextInputPasswordID"
        inputPlaceholder="Digite seu e-mail"
        onChangeInput={textValue => {
          setEmail(textValue);
          const isInvalid = emailIsInvalid(textValue);
          setIsEmailInvalid(isInvalid);
        }}
        inputValue={email}
        inputIcon={
          email !== ''
            ? renderInputIcon(
                isEmailInvalid ? 'close-circle' : 'checkmark-circle',
                isEmailInvalid ? ERROR_COLOR : SUCCESS_COLOR,
                () => null,
              )
            : null
        }
      />
      <InputForm
        inputTestID="TextInputPasswordID"
        inputPlaceholder="Digite sua senha"
        onChangeInput={textValue => setPassword(textValue)}
        inputValue={password}
        isSecureText={isVisiblePassword}
        inputIcon={renderInputIcon(
          isVisiblePassword ? 'eye' : 'eye-off',
          ON_PRIMARY_COLOR,
          () => setIsVisiblePassword(!isVisiblePassword),
        )}
      />

      <View style={styles.containerForgotPassword}>
        <Text
          style={styles.textForgotPassword}
          onPress={() => navigation.navigate('ForgotPassword')}>
          Esqueceu sua senha?
        </Text>
      </View>

      <ButtonLarge
        label="ENTRAR"
        onAction={sendSignIn}
        isVisibleLoading={isLoadingUser}
      />

      <View style={styles.containerLineOr}>
        <View style={styles.containerLine} />
        <Text style={styles.textOr}>OU</Text>
        <View style={styles.containerLine} />
      </View>

      {/* {Platform.OS === 'android' ? (
        <ButtonGoogle onAction={(responseGoogle) => sendSignInWithGoogle(responseGoogle)} />
      ) : null} */}
      {/* {Platform.OS === 'ios' ? (
        <ButtonApple onAction={(responseApple) => sendSignInWithApple(responseApple)} />
      ) : null} */}

      <View style={styles.containerSignUp}>
        <Text style={styles.textSignUp}>Ainda não tem conta?</Text>
        <Text
          style={styles.textToRedirectSignUpScreen}
          onPress={() => navigation.navigate('SignUp')}>
          cadastre-se
        </Text>
      </View>

      <Text
        style={styles.textToRedirectGuestScreen}
        onPress={() => dispatch(changeIsVisitor(true))}>
        continue como visitante
      </Text>

      <ModalNotFound
        isVisibleModal={isVisibleModalApple}
        onHideModal={() => setIsVisibleModalApple(false)}
      />
    </ContainerScrollForm>
  );
}
