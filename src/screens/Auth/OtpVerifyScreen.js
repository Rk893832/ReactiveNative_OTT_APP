import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const OtpVerifyScreen = () => {

    const navigation = useNavigation(); 
    const [otp, setOtp] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const otpInputRefs = useRef([]);

    const handleOtpChange = (index, value) => {

        console.log(index, value)
        const newOtp = otp.split('');
        newOtp[index] = value;
        setOtp(newOtp.join(''));
        if (index < otpInputRefs.current.length - 1 && value !== '') {
            otpInputRefs.current[index + 1].focus();
        }
    };

    const handleVerifyOtp = () => {

        console.log(otp)
        // Simulating OTP verification process with a timeout
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            // Handle OTP verification logic here
        }, 2000);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
                <AntDesign name="back" size={24} color="black" />
            </TouchableOpacity>

            <Text style={styles.headerText}>Verify OTP</Text>

            <View style={styles.otpContainer}>
                {Array.from({ length: 4 }).map((_, index) => (

                    <TextInput
                        key={index}
                        style={styles.otpInput}
                        value={otp[index] || ''}
                        onChangeText={(value) => handleOtpChange(index, value)}
                        maxLength={1}
                        keyboardType="numeric"
                        ref={(input) => (otpInputRefs.current[index] = input)}
                    />
                ))}
            </View>

            <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyOtp}>
                {isLoading ? (
                    <ActivityIndicator size="small" color="white" />
                ) : (
                    <Text style={styles.verifyButtonText}>Submit</Text>
                )}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f7f7f7',
        padding: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 30,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    otpInput: {
        backgroundColor: 'white',
        width: 60,
        height: 60,
        fontSize: 24,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'center',
    },
    verifyButton: {
        backgroundColor: 'green',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10,
    },
    verifyButtonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    goBackButton: {
        position: 'absolute', // Position the button absolutely
        top: 10, // Adjust top spacing as needed
        left: 10, // Adjust left spacing as needed
        backgroundColor: 'white',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
 
});

export default OtpVerifyScreen;
