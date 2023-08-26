import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, TextInput,
  TouchableOpacity, ActivityIndicator
} from 'react-native';
// import { TextInput } from 'react-native-web';


export default function SignupScreen() {

  const [isLoading, setIsLoading] = useState(false); // State for loader
  let [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: ""
  })

  const handleOnChange = (name, value) => {

    setUserData(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setIsLoading(true)
  }

  console.log(StatusBar)

  return (
    <View style={styles.container}>
      <Text style={styles.containerheading}>Signup Form !!</Text>
      <StatusBar style="dark-content" />

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={userData.name}
        onChangeText={(text) => handleOnChange('name', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={userData.email}
        onChangeText={(text) => handleOnChange('email', text)}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={userData.password}
        onChangeText={(text) => handleOnChange('password', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={userData.confirm_password}
        onChangeText={(text) => handleOnChange('confirm_password', text)}
      />

      {isLoading && (
        <>
          <ActivityIndicator size="large" color="green" />
          <Text style={styles.loader}>Loading...</Text>
        </>
      )}

      {!isLoading && (
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerheading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  input: {
    fontSize: 18,
    width: '80%',
    marginBottom: 20,
    padding: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 5,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10
  },
  button: {
    backgroundColor: '#009933',
    paddingVertical: 12,     // Increase vertical padding to make the button taller
    paddingHorizontal: 24,   // Increase horizontal padding to make the button wider
    borderRadius: 10,        // Adjust the border radius for curved corners
  },

  loader: {
    fontSize: 25,
  }
});
