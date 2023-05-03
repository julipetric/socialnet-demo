import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/welcome/Welcome';
import SignIn from './src/signIn/SignIn';
import Home from './src/home/Home';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BACKGROUND_GREY, DEFAULT_BACKGROUND } from './src/consts';
import InviteFriends from './src/inviteFriends/InviteFriends';
import ConfirmFriends from './src/confirmFriends/ConfirmFriends';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <StatusBar backgroundColor="#FDFDFD" />
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              contentStyle: { backgroundColor: DEFAULT_BACKGROUND },
              headerShown: false,
            }}
          >
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ contentStyle: { backgroundColor: BACKGROUND_GREY } }}
            />
            <Stack.Screen
              name="InviteFriends"
              component={InviteFriends}
              options={{ contentStyle: { backgroundColor: BACKGROUND_GREY } }}
            />
            <Stack.Screen
              name="ConfirmFriends"
              component={ConfirmFriends}
              options={{ contentStyle: { backgroundColor: BACKGROUND_GREY } }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

export default App;
