import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import MainLayout from '../layouts/MainLayout';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default function WelcomePage({ navigation }) {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to my app!</Text>


        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
      </View>
    </MainLayout>
  );
}


