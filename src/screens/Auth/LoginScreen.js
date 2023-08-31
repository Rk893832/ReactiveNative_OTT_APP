import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator, Button } from 'react-native';

export default function LoginScreen() {

  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false); // State for loader
  let [userData, setUserData] = useState({
    email: "",
    password: "",
  })

  const handleOnChange = (name, value) => {
    setUserData(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setIsLoading(true)
    navigation.navigate('OtpVerify')
  }


  return (
    <View style={styles.container}>
      <Text style={styles.containerheading}>Login Form !!</Text>
      <StatusBar style="dark-content" />


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

      {isLoading && (
        <>
          <ActivityIndicator size="large" color="green" />
          <Text style={styles.loader}>Loading...</Text>
        </>
      )}

      {!isLoading && (
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      )}


      <TouchableOpacity style={styles.linkContainer}
        onPress={() => navigation.navigate('Signup')}
        underlayColor="#EFEFEF">
        <Text style={styles.title}>Create a New Account
          <Text style={styles.linkText}> Sign Up</Text>
        </Text>
      </TouchableOpacity>




      <View style={styles.header}>
        <Text style={styles.title}>Go to Home</Text>
        <Button
          title="Home"
          onPress={() => navigation.navigate('Home')}
          color="#007AFF"
        />
      </View>
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
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  loader: {
    fontSize: 25,
  },

  linkContainer: {
    flexDirection: 'row', // Align children horizontally
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 0,
    borderColor: 'blue',
  },
  linkText: {
    color: 'blue',
    fontSize: 18,
  },
});
