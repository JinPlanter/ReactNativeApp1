import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

export default function MainLayout({ children }) {
    return (
        <View style={styles.container}>
            {children}
            {/* Add your Footer component here */}
        </View>
    );
}




