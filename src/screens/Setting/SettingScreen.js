import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
    
    const navigation = useNavigation();
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const toggleNotifications = () => {
        setNotificationsEnabled(!notificationsEnabled);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Settings</Text>
                <TouchableOpacity onPress={() => console.log('Back button pressed')}>
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionHeader}>Account Settings</Text>
                <TouchableOpacity style={styles.settingItem}>
                    <Text style={styles.settingText}>Profile Picture</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingItem}>
                    <Text style={styles.settingText}>Name and Email</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('ChangePassword')}>
                    <Text style={styles.settingText}>Change Password</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoutButton} onPress={() => console.log('Log out pressed')}>
                    <Text style={styles.logoutText}>Log Out</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionHeader}>App Settings</Text>
                <TouchableOpacity style={styles.settingItem}>
                    <Text style={styles.settingText}>Language</Text>
                </TouchableOpacity>
                <View style={styles.settingItem}>
                    <Text style={styles.settingText}>Notifications</Text>
                    <Switch value={notificationsEnabled} onValueChange={toggleNotifications} />
                </View>
                <TouchableOpacity style={styles.settingItem}>
                    <Text style={styles.settingText}>Subtitle Language</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingItem}>
                    <Text style={styles.settingText}>Streaming Quality</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    backText: {
        fontSize: 16,
        color: '#666',
    },
    section: {
        marginHorizontal: 20,

        marginBottom: 20,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#444',
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 10,
        elevation: 2,
    },
    settingText: {
        fontSize: 16,
        color: '#333',
    },
    logoutButton: {
        backgroundColor: '#ff5454',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    logoutText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default SettingsScreen;
