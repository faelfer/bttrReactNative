import {type ShowAlertProps} from '../../types/Alert';

export const alertErrorDefault: ShowAlertProps = {
	head: 'Aviso',
	body: 'No momento esse recurso está indisponível, tente novamente mais tarde.',
	onActions: [{text: 'OK', onPress() {
		console.log('alertErrorDefault | OK'); 
	}}],
};

export const alertWarningDefault: ShowAlertProps = {
	head: 'Aviso',
	onActions: [{text: 'OK', onPress() {
		console.log('alertWarningDefault | OK'); 
	}}],
};

export const alertSuccessDefault: ShowAlertProps = {
	head: 'Sucesso',
	onActions: [{text: 'OK', onPress() {
		console.log('alertSuccessDefault | OK'); 
	}}],
};
