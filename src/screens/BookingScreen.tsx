import React from 'react';
import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import Calendar from '../components/BookingTab/Calendar';
import Header from '../components/common/Header';

const BookingScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Header title="Hello," subtitle="Good morning" />
      <ScrollView>
        <Calendar />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // Add padding to account for status bar on Android
    paddingTop: StatusBar.currentHeight || 0,
  },
});

export default BookingScreen;
