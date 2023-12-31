import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import SignIn from '../../../pages/SignIn';
import SignUp from '../../../pages/SignUp';
// import ForgotPassword from '../../../pages/ForgotPassword';

import headerStackStyles from '../../../styles/headerStackStyles';

export default function UnauthenticatedRoute() {
  const Stack = createNativeStackNavigator();
  const stackHeaderOptions = headerTitle => ({
    headerBackTitleVisible: false,
    title: headerTitle,
  });

  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={headerStackStyles}>
      {/* <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
        }}
      /> */}
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={stackHeaderOptions('Cadastro')}
      />
      {/* <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={stackHeaderOptions('Esqueci minha Senha')}
      /> */}
    </Stack.Navigator>
  );
}
