import React, {useState, useCallback} from 'react';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {Icon} from '@rneui/themed';

import validateSignUp from '../../utils/validations/validateSignUp';
import showAlert from '../../utils/showAlert';

import ButtonLarge from '../../components/ButtonLarge';
import ContainerScrollForm from '../../components/ContainerScrollForm';
import InputOutlineForm from '../../components/InputOutlineForm';

import {ON_PRIMARY_COLOR} from '../../styles/colors';

import {useSignUpMutation} from '../../services/user/api';

import {
	alertErrorDefault,
	alertWarningDefault,
	alertSuccessDefault,
} from '../../utils/resources/alert_options_default';

export default function SignUp() {
	const [signUp, {isLoading}] = useSignUpMutation();

	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [isPasswordSecure, setIsPasswordSecure] = useState(true);
	const [isPasswordConfirmSecure, setIsPasswordConfirmSecure] = useState(true);

	const sendSignUp = async (): Promise<void> => {
		try {
			const ruleSignUp = validateSignUp({username, email, password});
			if (ruleSignUp.isInvalid) {
				showAlert({...alertWarningDefault, body: ruleSignUp.message});
			} else {
				const bulkSignUp = await signUp({username, email, password}).unwrap();
				showAlert({...alertSuccessDefault, body: bulkSignUp.message});
			}
		} catch (err: any) {
			showAlert({...alertErrorDefault, body: err.data.message});
		}
	};

	useFocusEffect(
		useCallback(() => {
			console.log('useFocusEffect | useCallback | focused');

			return () => {
				console.log('useFocusEffect | useCallback | unfocused');
				// Do something when the screen is unfocused
				// Useful for cleanup functions
			};
		}, []),
	);

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
			scrollTestID="SignUpScrollID"
			isRefreshing={false}
			onRefreshControl={() => null}>
			<InputOutlineForm
				inputTestID="TextInputPasswordID"
				inputPlaceholder="Digite seu nome completo"
				onChangeInput={textValue => {
					setUsername(textValue); 
				}}
				inputValue={username}
			/>

			<InputOutlineForm
				inputTestID="TextInputPasswordID"
				inputPlaceholder="Digite seu e-mail"
				onChangeInput={textValue => {
					setEmail(textValue.trim()); 
				}}
				inputValue={email}
			/>

			<InputOutlineForm
				inputTestID="TextInputPasswordID"
				inputPlaceholder="Digite sua senha"
				onChangeInput={textValue => {
					setPassword(textValue); 
				}}
				inputValue={password}
				isSecureText={isPasswordSecure}
				inputIcon={renderInputIcon(
					isPasswordSecure ? 'eye' : 'eye-off',
					ON_PRIMARY_COLOR,
					() => {
						setIsPasswordSecure(!isPasswordSecure); 
					},
				)}
			/>

			<InputOutlineForm
				inputTestID="TextInputPasswordID"
				inputPlaceholder="Digite sua confirmação de senha"
				onChangeInput={textValue => {
					setConfirmPassword(textValue); 
				}}
				inputValue={confirmPassword}
				isSecureText={isPasswordConfirmSecure}
				inputIcon={renderInputIcon(
					isPasswordConfirmSecure ? 'eye' : 'eye-off',
					ON_PRIMARY_COLOR,
					() => {
						setIsPasswordConfirmSecure(!isPasswordConfirmSecure); 
					},
				)}
			/>

			<ButtonLarge
				label="CADASTRAR"
				onAction={() => {
					void sendSignUp();
				}}
				isVisibleLoading={isLoading}
			/>
		</ContainerScrollForm>
	);
}
