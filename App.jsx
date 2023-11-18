/**
 * 
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import ToDoList from './src/ToDoList';
import ToDoForm from './src/ToDoForm';

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

  return (
    // SafeAreaView is used to render content within the safe area of a device.
    <SafeAreaView>
      <ToDoList tasks={tasks}/>
      <ToDoForm handleTask={handleTask}/>
    </SafeAreaView>
  );
}

