/**
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//LogInStack
import Introduce from 'containers/LogInStack/Introduce';
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

const LogInStack = createStackNavigator();
const CreateAccountStack = createStackNavigator();
const CreateKitchenProfileStack = createStackNavigator();
const MainStack = createStackNavigator();

const RootStack = createStackNavigator();

const navigationOptionsHandler = () => ({
  gestureEnabled: false,
  headerShown: false,
});

function LogInFlow() {
  return (
    <LogInStack.Navigator initialRouteName="Introduce">
      <LogInStack.Screen
        name="Introduce"
        component={Introduce}
        options={navigationOptionsHandler}
      />
      <LogInStack.Screen
        name="LogIn"
        component={LogIn}
        options={navigationOptionsHandler}
      />
      <LogInStack.Screen
        name="SignIn"
        component={SignIn}
        options={navigationOptionsHandler}
      />
      <LogInStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={navigationOptionsHandler}
      />
    </LogInStack.Navigator>
  );
}

function CreateAccountFlow() {
  return (
    <CreateAccountStack.Navigator initialRouteName="CreateAccount">
      <CreateAccountStack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={navigationOptionsHandler}
      />
      <CreateAccountStack.Screen
        name="WhereCooking"
        component={WhereCooking}
        options={navigationOptionsHandler}
      />
    </CreateAccountStack.Navigator>
  );
}

function CreateKitchenProfileFlow() {
  return (
    <CreateKitchenProfileStack.Navigator initialRouteName="KitchenProfile">
      <CreateKitchenProfileStack.Screen
        name="KitchenProfile"
        component={KitchenProfile}
        options={navigationOptionsHandler}
      />
    </CreateKitchenProfileStack.Navigator>
  );
}

function MainFlow() {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        name="Home"
        component={Home}
        options={navigationOptionsHandler}
      />
    </MainStack.Navigator>
  );
}

function AppRoutes({isAuthenticated}) {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode="none">
        <RootStack.Screen name="LogInFlow" component={LogInFlow} />
        <RootStack.Screen
          name="CreateAccountFlow"
          component={CreateAccountFlow}
        />
        <RootStack.Screen
          name="CreateKitchenProfileFlow"
          component={CreateKitchenProfileFlow}
        />
        <RootStack.Screen name="MainFlow" component={MainFlow} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default AppRoutes;
