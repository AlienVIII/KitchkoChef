import React, {memo, useMemo} from 'react';
import {View, StyleSheet, Text, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
// import NetInfo from '@react-native-community/netinfo';
import {deviceWidth, size_30} from 'constants/dimentions'; //statusBarHeight
import {PRIMARY_ERROR, PRIMARY_LIGHT} from 'constants/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import {usePrevious} from 'utils/hook';

const Loading = () => {
  // const [isRendering, setRerenderStatus] = useState(false);
  const {isConnected = false, haveError = ''} = useSelector(({loaderStore}) => {
    //isLoading,
    // const {errorMessage} = intervalDataStore;
    // const isLoading = isFetching || mess; //|| authStore.isFetching;
    return {
      // isLoading: isFetching,
      haveError: 'errorMessage',
      isConnected: loaderStore.isConnected,
    };
  });

  const errorTitle = useMemo(
    () =>
      isConnected ? 'There are something wrong' : 'No Internet Connection',
    [isConnected],
  );
  // const oldIsLoading = usePrevious(isLoading);
  // const oldIsConnected = usePrevious(isConnected);

  // const checkStatus = useCallback(() => {
  //   if ((isLoading || !isConnected) && !isRendering) {
  //     return setRerenderStatus(true);
  //   }
  //   isRendering && setRerenderStatus(false);
  //   return;
  // }, [isLoading, isConnected, isRendering]);

  // const ConnectionStatus = () => {
  //   if (!isConnected) {
  //     return (
  //       <View style={styles.offlineContainer}>
  //         <ActivityIndicator size="large" color="white" />
  //         <Text style={styles.offlineText}>No Internet Connection</Text>
  //       </View>
  //     );
  //   }
  //   return null;
  // };

  // useEffect(() => {
  //   checkStatus();
  // }, [checkStatus]);

  return !isConnected || haveError ? (
    <View style={styles.defaultLoadingStyle}>
      {/* <ConnectionStatus /> */}
      {/* <ActivityIndicator size="large" color="white" />
        {mess ? <Text style={styles.offlineText}>{mess}</Text> : null} */}
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
    // bottom: 0,
    // flex: 1,
    backgroundColor: 'transparent', //'rgba(0,0,0,0.8)',
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
    top: 0, //statusBarHeight,
    left: 0,
    right: 0,
    zIndex: 1001,
  },
  offlineText: {
    color: PRIMARY_LIGHT,
    marginLeft: 5,
  },
});
