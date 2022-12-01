import React from 'react';
import { useRef } from 'react';
import UploadImage from './UploadImage';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

export default function Form() {
    const priceRef = useRef(0);

    function addDestinationHandler(e) {
        alert("here");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add Destination Form</Text>
            <TextInput style={styles.input} placeholder="Destination"></TextInput>
            <TextInput style={styles.input} placeholder="Airport"></TextInput>
            <TextInput style={styles.input} placeholder="Price"></TextInput>

            <UploadImage />

            <TouchableOpacity style={styles.button} onPress={addDestinationHandler}>
                <Text style={styles.buttonText}>Add Destination</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        height: '100%',
        width: '100%',
        padding: 20,
        borderColor: 'black',
        borderTopWidth: 3,
        borderBottomWidth: 3,
        backgroundColor: '#f7e9de',
        fontSize: 32,
        alignItems: 'center'
    },

    title: {
        fontSize: 20,
        marginBottom: 20,
    },

    input: {
        height: 40,
        width: '95%',
        borderRadius: 20,
        borderStyle: 'solid',
        backgroundColor: 'white',
        fontSize: 16,
        paddingHorizontal: 10,
        marginVertical: 10,
        color: 'black'
    },

    button: {
        marginVertical: 20,
        color: 'white',
        height: 50,
        width: '100%',

        borderRadius: 50,
        // borderStyle: 'solid',
        // borderWidth: 2,
        // borderColor: 'black',

        backgroundColor: '#3e6783',
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        color: 'white',
        fontSize: 16
    }
});