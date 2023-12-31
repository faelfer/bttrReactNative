 
import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
// Import * as Sentry from '@sentry/react-native';
// import OneSignal from 'react-native-onesignal';
// import {useNetInfo} from '@react-native-community/netinfo';
// import Snackbar from 'react-native-snackbar';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import {store, persistor} from './src/services/createStore';
import Routes from './src/routes';
// Import environment from './src/utils/environment';
// import {version} from './package.json';

import {PRIMARY_COLOR} from './src/styles/colors';

// Sentry.init({
// 	dsn: environment.SENTRY_DSN,
// 	release: `usibras-react-native@${version}`,
// 	environment: environment.NAME_ENV,
// 	debug: true,
// });

// OneSignal Init Code
// OneSignal.setLogLevel(6, 0);
// OneSignal.setAppId(environment.ONESIGNAL_APP_ID);
// END OneSignal Init Code

function ReduxProvider() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Routes />
			</PersistGate>
		</Provider>
	);
}

export default function App() {
	// Const netInfo = useNetInfo();

	// useEffect(() => {
	// 	console.log('useEffect | netInfo: ', netInfo);
	// 	console.log('useEffect | netInfo.isConnected: ', netInfo.isConnected);
	// 	if (netInfo.isConnected === false) {
	// 		console.log('useEffect | netInfo.isConnected === false: ', netInfo.isConnected === false);
	// 		Snackbar.show({
	// 			text: 'Sem conexão com a internet, tente novamente mais tarde.',
	// 			duration: Snackbar.LENGTH_LONG,
	// 		});
	// 	}
	// }, [netInfo]);

	return (
		<SafeAreaView style={{flex: 1, backgroundColor: PRIMARY_COLOR}}>
			<StatusBar
				backgroundColor={PRIMARY_COLOR}
				barStyle="light-content"
			/>
			<ReduxProvider />
		</SafeAreaView>
	);
}
