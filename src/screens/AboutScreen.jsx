import React from "react";
import { StyleSheet, Text, View } from 'react-native';

import MainLayout from '../layouts/MainLayout';

const styles = StyleSheet.create({
    textHeader: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    text: {
        fontSize: 14,
        textAlign: 'center',
        margin: 10,
    },
});

export default function AboutScreen() {
    return (
        <MainLayout>
            <Text style={styles.textHeader}>Mobile App Demo</Text>
            <Text style={styles.text}>Version 1.0.0</Text>
        </MainLayout>
    )
}