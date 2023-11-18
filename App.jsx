/**
 * 
 * My To Do List App
 *
 * @format
 */


/*
Need to run the following shell commands in order to implement navigation:
```
npm install @react-navigation/native @react-navigation/stack
npm install react-native-gesture-handler react-native-safe-area-context react-native-screens
```
*/

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ToDoList from './src/components/ToDoList';
import ToDoForm from './src/components/ToDoForm';
import AboutScreen from './src/screens/AboutScreen';
import WelcomePage from './src/screens/WelcomePage';

export default function App() {
  const styles = StyleSheet.create({
  });

  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
    'Cook dinner',
  ]);

  const handleTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  // For navigation.
  const Stack = createStackNavigator();

  return (
    // SafeAreaView is used to render content within the safe area of a device.
    <SafeAreaView>
      <NavigationContainer>
        {/* For navigation. */}
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={WelcomePage} />
          <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="ToDoList" component={ToDoList} />
          <Stack.Screen name="ToDoForm" component={ToDoForm} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

