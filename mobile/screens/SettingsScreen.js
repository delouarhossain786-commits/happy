import React from 'react';
import { View, Text, Switch, StyleSheet, Button } from 'react-native';

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

  const toggleNotifications = () => setNotificationsEnabled(previousState => !previousState);
  const toggleDarkMode = () => setDarkModeEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>App Settings</Text>
      <View style={styles.settingItem}>
        <Text>Notifications</Text>
        <Switch 
          value={notificationsEnabled} 
          onValueChange={toggleNotifications} 
        />
      </View>
      <View style={styles.settingItem}>
        <Text>Dark Mode</Text>
        <Switch 
          value={darkModeEnabled} 
          onValueChange={toggleDarkMode} 
        />
      </View>
      <Button title="Privacy Settings" onPress={() => alert('Privacy Settings Clicked')} />
      <Button title="Account Settings" onPress={() => alert('Account Settings Clicked')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});

export default SettingsScreen;