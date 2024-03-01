import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Logout = ({navigation,route}) => {
  const {setSignedIn}=route.params

  const handleLogout = () => {
    // Handle login logic here
    setSignedIn(false)
    console.log('Logging in with username:', username);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logout</Text>
      <Button
        title="logout"
        onPress={handleLogout}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0d0', // Light gray background
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    borderRadius: 5,
  },
});

export default Logout;