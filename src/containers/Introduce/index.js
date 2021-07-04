import React, {memo} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
// import Detail from './Detail';

const Introduce = ({navigation}) => {
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
export default memo(Introduce);
