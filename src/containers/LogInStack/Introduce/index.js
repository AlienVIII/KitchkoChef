import React, {memo} from 'react';
import {Text, View, Button} from 'react-native';
import styles from './styles';
// import Detail from './Detail';

const Introduce = ({navigation}) => {
  const screenState = navigation.dangerouslyGetState();
  const routeName = screenState?.routeNames[screenState.index];

  const navigate = () => navigation.navigate('LogIn');
  // const dispatch = useDispatch();
  // const doStartLoad = (evt, cb) => dispatch(startLoading(evt, cb));
  // const doStopLoad = evt => dispatch(stopLoading(evt));

  return (
    <View style={styles.container}>
      <Text>{routeName}</Text>
      <Button
        title="Press me"
        onPress={() => {
          navigate();
        }}
      />
    </View>
  );
};
export default memo(Introduce);
