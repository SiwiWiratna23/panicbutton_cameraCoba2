import * as React from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Start,
  Login,
  LoginSucced_Submitted,
  ForgotPassword,
  ForgotPassword2,
  PasswordFilled,
  PasswordRenewed_Submitted,
  Register,
  OTP_Verification,
  RegisterSubmitted,
  FindLocation,
  FindLocation2,
  FindLocation3,
  DataSubmitted,
  CameraCoba2,
} from './screens';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Start"
            component={Start}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          /> 
          <Stack.Screen
            name="LoginSucced_Submitted"
            component={LoginSucced_Submitted}
            options={{ headerShown: false }}
          /> 
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{ headerShown: false }}
          /> 
          <Stack.Screen
            name="ForgotPassword2"
            component={ForgotPassword2}
            options={{ headerShown: false }}
          /> 
          <Stack.Screen
            name="PasswordFilled"
            component={PasswordFilled}
            options={{ headerShown: false }}
          /> 
          <Stack.Screen
            name="PasswordRenewed_Submitted"
            component={PasswordRenewed_Submitted}
            options={{ headerShown: false }}
          /> 
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          /> 
          <Stack.Screen
            name="OTP_Verification"
            component={OTP_Verification}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RegisterSubmitted"
            component={RegisterSubmitted}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FindLocation"
            component={FindLocation}
            options={{ headerShown: false }}
          /> 
          <Stack.Screen
            name="FindLocation2"
            component={FindLocation2}
            options={{ headerShown: false }}
          /> 
          <Stack.Screen
            name="FindLocation3"
            component={FindLocation3}
            options={{ headerShown: false }}
          /> 
          <Stack.Screen
            name="DataSubmitted"
            component={DataSubmitted}
            options={{ headerShown: false }}
          /> 
          <Stack.Screen
            name="CameraCoba2"
            component={CameraCoba2}
            options={{ headerShown: false }}
          /> 
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
