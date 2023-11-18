/**
 * 
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { SafeAreaView } from 'react-native';

import ToDoList from './src/ToDoList';
import ToDoForm from './src/ToDoForm';

export default function App() {
  return (
    // SafeAreaView is used to render content within the safe area of a device.
    <SafeAreaView>
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
}

