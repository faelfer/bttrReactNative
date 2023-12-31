import {Alert} from 'react-native';

import {type ShowAlertProps} from '../types/Alert';

export default function showAlert({
	head,
	body,
	onActions,
}: ShowAlertProps): void {
	setTimeout(() => {
		Alert.alert(head, body, onActions); 
	}, 500);
}
