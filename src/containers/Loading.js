import React, {memo, useMemo} from 'react';
import {View, StyleSheet, Text, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import {deviceWidth, size_30} from 'constants/dimentions';
import {PRIMARY_ERROR, PRIMARY_LIGHT} from 'constants/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Loading = () => {
  const {isConnected = false, haveError = ''} = useSelector(({loaderStore}) => {
    return {
      haveError: '',
      isConnected: loaderStore.isConnected,
    };
  });

  const errorTitle = useMemo(
    () =>
      isConnected ? 'There are something wrong' : 'No Internet Connection',
    [isConnected],
  );

  return !isConnected || haveError ? (
    <View style={styles.defaultLoadingStyle}>
      <View style={styles.offlineContainer}>
        <ActivityIndicator size="large" color="white" />
        <AntDesign name="warning" size={size_30} color={PRIMARY_LIGHT} />
        <Text style={styles.offlineText}>{errorTitle}</Text>
      </View>
    </View>
  ) : null;
};

export default memo(Loading);

const styles = StyleSheet.create({
  defaultLoadingStyle: {
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 10000,
  },
  offlineContainer: {
    backgroundColor: PRIMARY_ERROR,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: deviceWidth,
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1001,
  },
  offlineText: {
    color: PRIMARY_LIGHT,
    marginLeft: 5,
  },
});
