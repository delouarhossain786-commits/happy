import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  const handleSendOtp = () => {
    // Logic to send OTP to phone number
    setMessage(`OTP sent to ${phoneNumber}`);
  };

  const handleVerifyOtp = () => {
    // Logic to verify OTP
    if (otp === '123456') { // Example OTP check
      setMessage('OTP verified!');
    } else {
      setMessage('Invalid OTP. Please try again.');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Phone Number:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
        placeholder="Enter phone number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />

      <Button title="Send OTP" onPress={handleSendOtp} />

      <Text>OTP:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
        placeholder="Enter OTP"
        value={otp}
        onChangeText={setOtp}
        keyboardType="number-pad"
      />

      <Button title="Verify OTP" onPress={handleVerifyOtp} />

      {message ? <Text>{message}</Text> : null}
    </View>
  );
};

export default LoginScreen;