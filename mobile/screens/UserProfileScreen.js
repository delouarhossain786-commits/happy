import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const UserProfileScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');

    const handleUpdateProfile = () => {
        // Insert update functionality here (e.g., API call)
        console.log('Updated profile:', { username, email, bio });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Username:</Text>
            <TextInput 
                style={styles.input} 
                value={username} 
                onChangeText={setUsername} 
            />
            <Text style={styles.label}>Email:</Text>
            <TextInput 
                style={styles.input} 
                value={email} 
                onChangeText={setEmail} 
                keyboardType='email-address' 
            />
            <Text style={styles.label}>Bio:</Text>
            <TextInput 
                style={styles.input} 
                value={bio} 
                onChangeText={setBio} 
                multiline 
            />
            <Button title='Update Profile' onPress={handleUpdateProfile} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    label: {
        marginVertical: 10,
        fontSize: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
    },
});

export default UserProfileScreen;