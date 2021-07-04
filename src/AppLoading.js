import React, {memo} from 'react';
import {StatusBar, StyleSheet, ScrollView} from 'react-native';
import AppRoutes from 'RootApp';
import InitApp from 'InitApp';
import Loading from 'containers/Loading';
import {deviceHeight, deviceWidth} from 'constants/dimentions';

const styles = StyleSheet.create({
  container: {width: deviceWidth, height: deviceHeight},
  contentContainerStyle: {flexGrow: 1},
});

const LoadingAsync = () => (
  <ScrollView
    style={styles.container}
    contentContainerStyle={styles.contentContainerStyle}
    bounces={false}>
    <StatusBar
      hidden
      // translucent
      // backgroundColor="transparent"
      // barStyle="dark-content"
    />
    <InitApp />
    <AppRoutes />
    <Loading />
  </ScrollView>
);

export default memo(LoadingAsync);
