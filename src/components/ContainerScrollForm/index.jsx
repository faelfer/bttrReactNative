/* eslint-disable react/prop-types */
import React from 'react';
import {
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  RefreshControl,
} from 'react-native';

import styles from './styles';
import scrollViewStyles, {
  iconRefreshStyles,
} from '../../styles/scrollViewStyles';

export default function ContainerScrollForm({
  scrollTestID,
  isRefreshing,
  onRefreshControl,
  children,
}) {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled={Platform.OS === 'ios'}
      style={styles.containerKeyboardAvoiding}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          testID={scrollTestID}
          contentContainerStyle={scrollViewStyles.containerContent}
          refreshControl={(
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={() => onRefreshControl()}
              colors={iconRefreshStyles.colors}
              progressBackgroundColor={iconRefreshStyles.progressBackground}
              tintColor={iconRefreshStyles.tintColor}
            />
          )}
        >
          {children}
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
