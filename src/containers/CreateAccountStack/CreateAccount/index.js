import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
// import {useDispatch} from 'react-redux';
// import {startLoading, stopLoading} from 'state/loader/actions';

const CreateAccount = ({navigation}) => {
  const screenState = navigation.dangerouslyGetState();
  const routeName = screenState?.routeNames[screenState.index];

  // const dispatch = useDispatch();
  // const doStartLoad = (evt, cb) => dispatch(startLoading(evt, cb));
  // const doStopLoad = evt => dispatch(stopLoading(evt));

  return (
    <View style={styles.container}>
      <Text>{routeName}</Text>
    </View>
  );
};

export default CreateAccount;
