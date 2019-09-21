import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View
            style={{
              backgroundColor: '#002D56',
              padding: 8,
              paddingTop: 56,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 20
            }}
          >
            <Image
              source={require('./assets/home-big-c-logo.png')}
              style={{ height: 100, resizeMode: 'contain', marginTop: 20, marginBottom: 20 }}
              tintColor='#FFFFFF'
            />
      </View>
      <Text style={{ color: '#002D56', fontSize: 18, padding: 10 }}>This version of Chattahooligan Hymnal has been deprecated.{"\n"}{"\n"}Please search for "Chattahooligan Hymnal" on Google Play or the Apple App Store for the new and improved version!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
});
