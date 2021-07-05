import React from 'react';
import {Text, View, Button} from 'react-native';
import styles from './styles';
// import {useDispatch} from 'react-redux';
// import {startLoading, stopLoading} from 'state/loader/actions';

const LogIn = ({navigation}) => {
  const screenState = navigation.dangerouslyGetState();
  const routeName = screenState?.routeNames[screenState.index];

  const navigate = () => navigation.goBack();
  // const dispatch = useDispatch();
  // const doStartLoad = (evt, cb) => dispatch(startLoading(evt, cb));
  // const doStopLoad = evt => dispatch(stopLoading(evt));

  return (
    <View style={styles.container}>
      <Text>{routeName}</Text>
      <Button
        title="Back"
        onPress={() => {
          navigate();
        }}
      />
    </View>
  );
};

export default LogIn;
