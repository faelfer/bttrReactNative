import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import emailIsInvalid from '../../utils/validation/emailIsInvalid';
import showFlashMessage from '../../utils/showFlashMessage';

import ButtonLarge from '../../components/ButtonLarge';
import ContainerScrollForm from '../../components/ContainerScrollForm';
import InputOutlineForm from '../../components/InputOutlineForm';

import {ForgotPasswordFetch} from '../../store/user/actions';

export default function ForgotPassword() {
  const {isLoadingUser} = useSelector(state => state.user);
  const [email, setEmail] = useState('');
  const [isEmailInvalid, setIsEmailInvalid] = useState(true);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  function validateForgotPassword() {
    let message = '';

    if (!email) {
      message = 'Preencha o campo e-mail';
    } else if (isEmailInvalid) {
      message = 'Campo e-mail é inválido';
    }

    return {isInvalid: !!message, message};
  }

  const sendSignIn = async () => {
    const responseValidateSignIn = await validateForgotPassword();
    console.log(
      'sendSignIn | responseValidateSignIn: ',
      responseValidateSignIn,
    );

    if (responseValidateSignIn.isInvalid) {
      showFlashMessage('Aviso', responseValidateSignIn.message, 'danger');
    } else {
      try {
        dispatch(ForgotPasswordFetch(email, navigation));
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
  return (
    <ContainerScrollForm
      scrollTestID="SignInScrollID"
      isRefreshing={false}
      onRefreshControl={() => console.log('test')}>
      <InputOutlineForm
        inputTestID="TextInputPasswordID"
        inputPlaceholder="Digite seu e-mail"
        onChangeInput={textValue => {
          setEmail(textValue);
          const isInvalid = emailIsInvalid(textValue);
          setIsEmailInvalid(isInvalid);
        }}
        inputValue={email}
      />

      <ButtonLarge
        label="ENVIAR"
        onAction={sendSignIn}
        isVisibleLoading={isLoadingUser}
      />
    </ContainerScrollForm>
  );
}
