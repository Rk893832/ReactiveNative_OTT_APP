import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function ProfileScreen() {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState('John Doe');
  const [bio, setBio] = useState('Software Developer');
  const [email, setEmail] = useState('john.doe@example.com');
  const [location, setLocation] = useState('New York, USA');

  const handleEditPress = () => {
    setIsEditing(!isEditing);
  };

  const handleSavePress = () => {
    // Save edited data here
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
        {isEditing ? (
          <TouchableOpacity style={styles.saveButton} onPress={handleSavePress}>
            <Text style={styles.editButtonText}>Save</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        )}
      </View>
      <Image
        source={{ uri: 'https://img.freepik.com/premium-vector/avatar-profile-icon_188544-4755.jpg' }} // Replace with your profile picture source
        style={styles.profilePicture}
      />
      <TextInput
        style={[styles.inputField, isEditing && styles.editInput]}
        value={username}
        onChangeText={text => setUsername(text)}
        editable={isEditing}
      />
      <TextInput
        style={[styles.inputField, isEditing && styles.editInput]}
        value={bio}
        onChangeText={text => setBio(text)}
        editable={isEditing}
      />
      <Text style={styles.detailLabel}>Email:</Text>
      <TextInput
        style={[styles.inputField, isEditing && styles.editInput]}
        value={email}
        onChangeText={text => setEmail(text)}
        editable={isEditing}
      />
      <Text style={styles.detailLabel}>Location:</Text>
      <TextInput
        style={[styles.inputField, isEditing && styles.editInput]}
        value={location}
        onChangeText={text => setLocation(text)}
        editable={isEditing}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  saveButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  editButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  inputField: {
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#f7f7f7',
  },
  editInput: {
    backgroundColor: 'white', // Change the background color for editing
  },
  detailLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default ProfileScreen;
