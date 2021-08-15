import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack'
import Favorites from './Pages/Favorites';
import Jobs from './Pages/Jobs';
import JobDetails from './Pages/JobDetails';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import  UserProvider from './context/Provider.js';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const  JobStack= (props)=> {
  return (
      <Stack.Navigator >
        <Stack.Screen  options={{headerShown: false}} name="Jobs" component={Jobs} />
        <Stack.Screen options={{headerShown: false}} options={({ route }) => ({ title: route.params.item.name })} name="JobDetails" component={JobDetails} />
      </Stack.Navigator>
  );
}
const  FavoritesStack= ()=> {
  return (
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}}   name="Favorites" component={Favorites} />
      </Stack.Navigator>
  );
}
 function App() {
  return (
    <UserProvider>
    <NavigationContainer  options={{headerShown: false}}>
      <Tab.Navigator>
        <Tab.Screen options={{headerShown: false}} options={{
          headerShown: false,
          tabBarLabel: 'Jobs',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="briefcase" color='blue' size={size} />
          ),
        }}  name="JobStack" component={JobStack} />
        <Tab.Screen options={{headerShown: false}} options={{
          headerShown: false,
          tabBarLabel: 'Favorite',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color='red' size={size} />
          ),
        }} name="FavoritesStack" component={FavoritesStack} />
      </Tab.Navigator>
    </NavigationContainer>
    </UserProvider>
  );
}
export default App;