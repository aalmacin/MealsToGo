import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.searchContainer}>
          <Text>search</Text>
        </View>
        <View style={styles.listContainer}>
          <Text>list</Text>{' '}
        </View>
      </SafeAreaView>
      <ExpoStatusBar />
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, marginTop: StatusBar.currentHeight },
  searchContainer: { padding: 16, backgroundColor: 'green' },
  listContainer: { flex: 1, padding: 16, backgroundColor: 'blue' },
});
