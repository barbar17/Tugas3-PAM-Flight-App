import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import HomeScreen from './src/screens/Home';
import Icon from "react-native-vector-icons/FontAwesome5";
import JadwalScreen from './src/screens/Jadwal';

const App: () => React$Node = () => {
  return (
    // <SafeAreaView>
    //   <SafeAreaView style={styles.nav}>
    //     <Icon
    //       style={styles.navBar} name="bars" size={25} color='white'
    //       onPress={() => console.warn("icon bar ditekan!")} />
    //     <Icon
    //       style={styles.navUser} name="user" size={25} color='white'
    //       onPress={() => console.warn("icon user ditekan!")} />
    //   </SafeAreaView>
    //   <ScrollView style={styles.background}>
    //     <StatusBar style="dark-content" />
    //     <SafeAreaView>
    //       <HomeScreen />
    //       <Text style={styles.copyright}>Copyright Akbar Maulana-119140151</Text>
    //     </SafeAreaView>
    //   </ScrollView>
    // </SafeAreaView>
    <SafeAreaView style={styles.background}>
      <SafeAreaView style={styles.nav}>
        <Icon
          style={styles.navBar} name="arrow-left" size={25} color='white'
          onPress={() => console.warn("icon arrow ditekan!")} />
        <Text style={styles.navText}>Hiling.id</Text>
        <Icon
          style={styles.navUser} name="user" size={25} color='white'
          onPress={() => console.warn("icon user ditekan!")} />
      </SafeAreaView>
      <SafeAreaView>
        <JadwalScreen />
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    height: '100%',
    backgroundColor: 'lightgrey',
  },
  nav: {
    backgroundColor: 'lightgreen',
    height: 70,

  },
  navBar: {
    position: 'absolute',
    left: 20,
    top: 30,
  },
  navUser: {
    position: 'absolute',
    right: 20,
    top: 30,

  },
  copyright: {
    position: 'absolute',
    bottom: 175,
    alignSelf: 'center',
  },
  navText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    top: 22,
    alignSelf: 'center',
  }
});

export default App;