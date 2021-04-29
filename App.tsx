import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight}}>
        <View style={{padding: 16, backgroundColor: 'green'}}>
          <Text>search</Text>
        </View>
        <View style={{flex: 1, padding: 16, backgroundColor: 'blue'}}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar />
    </>
  );
}

const styles = StyleSheet.create({
});
