import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{ headerShown: false }}
    />
    <AuthStack.Screen
      name="SignUp"
      component={SignUp}
      options={{
        headerTitle: 'Voltar',
        headerStyle: {
          backgroundColor: '#131313',
          borderBottomWidth: 1,
          borderBottomColor: '#00b94a',
        },
        headerTintColor: '#fff',
        headerBackTitleVisible: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    />
  </AuthStack.Navigator>
);

export default AuthRoutes;
