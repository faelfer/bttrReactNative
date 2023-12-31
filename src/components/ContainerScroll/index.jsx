/* eslint-disable react/prop-types */
import React from 'react';
import { ScrollView, RefreshControl } from 'react-native';

import scrollViewStyles, {
  iconRefreshStyles,
} from '../../styles/scrollViewStyles';

export default function ContainerScroll({
  scrollTestID,
  isRefreshing,
  onRefreshControl,
  children,
}) {
  return (
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
  );
}
