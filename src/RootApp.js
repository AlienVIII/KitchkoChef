/**
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {createMyNavigator} from 'components/Navigator/TabNavigator';

// import Test from 'containers/Test';

//LogInStack
import Introduce from 'containers/Introduce';
import ForgotPassword from 'containers/LogInStack/ForgotPassword';
import LogIn from 'containers/LogInStack/LogIn';
import SignIn from 'containers/LogInStack/SignIn';

//CreateAccountStack
import CreateAccount from 'containers/CreateAccountStack/CreateAccount';
import WhereCooking from 'containers/CreateAccountStack/WhereCooking';

//CreateKitchenProfileStack
import KitchenProfile from 'containers/CreateKitchenProfileStack/KitchenProfile';

//HomeStack
import Home from 'containers/Home';

const Stack = createStackNavigator();
// const CustomStack = createMyNavigator();

const navigationOptionsHandler = () => ({
  gestureEnabled: false,
  headerShown: false,
});

function LogInStack() {
  return (
    <Stack.Navigator initialRouteName="Introduce">
      <Stack.Screen
        name="Introduce"
        component={Introduce}
        options={navigationOptionsHandler}
      />
      <Stack.Screen
        name="LogIn"
        component={LogIn}
        options={navigationOptionsHandler}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={navigationOptionsHandler}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={navigationOptionsHandler}
      />
    </Stack.Navigator>
  );
}

function CreateAccountStack() {
  return (
    <Stack.Navigator initialRouteName="CreateAccount">
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={navigationOptionsHandler}
      />
      <Stack.Screen
        name="WhereCooking"
        component={WhereCooking}
        options={navigationOptionsHandler}
      />
    </Stack.Navigator>
  );
}

function CreateKitchenProfileStack() {
  return (
    <Stack.Navigator initialRouteName="KitchenProfile">
      <Stack.Screen
        name="KitchenProfile"
        component={KitchenProfile}
        options={navigationOptionsHandler}
      />
    </Stack.Navigator>
  );
}

function MainFlow() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={navigationOptionsHandler}
      />
    </Stack.Navigator>
  );
}

function AppRoutes({isAuthenticated}) {
  return (
    <NavigationContainer>
      {/* <CustomStack.Navigator initialRouteName="Home">
        <CustomStack.Screen
          name="Home"
          component={Home}
          options={navigationOptionsHandler}
        />
      </CustomStack.Navigator> */}
      <LogInStack />
      <CreateAccountStack />
      <CreateKitchenProfileStack />
      <MainFlow />
    </NavigationContainer>
  );
}

export default AppRoutes;
