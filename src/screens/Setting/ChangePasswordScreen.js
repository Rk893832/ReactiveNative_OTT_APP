import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

const ChangePasswordScreen = () => {

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChangePassword = () => {
        // Simulating the password change process with a timeout
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            // Handle password change logic here
        }, 2000);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Change Password</Text>

            <TextInput
                style={styles.input}
                placeholder="Current Password"
                secureTextEntry
                value={currentPassword}
                onChangeText={setCurrentPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="New Password"
                secureTextEntry
                value={newPassword}
                onChangeText={setNewPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm New Password"
                secureTextEntry
                value={confirmNewPassword}
                onChangeText={setConfirmNewPassword}
            />

            {isLoading ? (
                <>
                    <ActivityIndicator size="large" color="green" />
                    <Text style={styles.loader}>Loading...</Text>
                </>
            ) : (
                <TouchableOpacity style={styles.changeButton} onPress={handleChangePassword}>
                    <Text style={styles.changeButtonText}>Change Password</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        padding: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    input: {
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
    },
    changeButton: {
        backgroundColor: 'green',
        paddingVertical: 15,
        borderRadius: 10,
    },
    changeButtonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    loader: {
        fontSize: 25,
        textAlign:'center'
    },
});

export default ChangePasswordScreen;
