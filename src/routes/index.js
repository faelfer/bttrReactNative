import React, {useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import analytics from '@react-native-firebase/analytics';

import UnauthenticatedRoute from './navigation/UnauthenticatedRoute';

function Routes() {
  const routeNameRef = useRef();
  const navigationRef = useRef();

  // async function sendLogScreenView() {
  //   try {
  //     const previousRouteName = routeNameRef.current;
  //     const currentRouteName = navigationRef.current.getCurrentRoute().name;
  //     console.log('sendLogScreenView | currentRouteName: ', currentRouteName);
  //     if (previousRouteName !== currentRouteName) {
  //       await analytics().logScreenView({
  //         screen_name: currentRouteName,
  //         screen_class: currentRouteName,
  //       });
  //     }
  //     routeNameRef.current = currentRouteName;
  //   } catch (error) {
  //     console.log('sendLogScreenView | error: ', error);
  //   }
  // }

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.current.getCurrentRoute().name;
      }}
      // onStateChange={() => sendLogScreenView()}
    >
      <UnauthenticatedRoute />
    </NavigationContainer>
  );
}

export default Routes;
