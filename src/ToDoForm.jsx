import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
    },
});


export default function ToDoForm({ handleTask }) {
    const [taskText, setTaskText] = useState('');

    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Add a new task..."

                // when the user inputs text onChangeText is called, text is then passed into the function as an argument.
                onChangeText={(text) => setTaskText(text)}
                value={taskText}
            />
            <Button title="Add" onPress={() => handleTask(taskText)} />
        </View>
    );
}
