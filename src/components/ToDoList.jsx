import React from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  }
});

export default function ToDoList({ tasks = [] }) {


  return (
    /*
    ScrollView provides a scrollable container that can render multiple components and views.
    */
    <ScrollView>
      {tasks.map((task, index) => (
        <Pressable key={index}>
          <View style={[styles.task]}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  )
}