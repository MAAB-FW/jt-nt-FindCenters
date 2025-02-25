import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ActivitiesScreen from '../screens/ActivitiesScreen';
import BookingScreen from '../screens/BookingScreen';

type TabType = 'Bookings' | 'Activities' | 'Notifications' | 'Menu';

const AppNavigator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('Bookings');

  const renderScreen = () => {
    switch (activeTab) {
      case 'Bookings':
        return <BookingScreen />;
      case 'Activities':
        return <ActivitiesScreen />;
      case 'Notifications':
      case 'Menu':
        return (
          <View style={styles.placeholderScreen}>
            <Text style={styles.placeholderText}>{activeTab} Screen</Text>
            <Text>Coming soon</Text>
          </View>
        );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>{renderScreen()}</View>
      <View style={styles.tabBar}>
        {(['Bookings', 'Activities', 'Notifications', 'Menu'] as TabType[]).map(
          tab => (
            <TouchableOpacity
              key={tab}
              style={styles.tabItem}
              onPress={() => setActiveTab(tab)}>
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ),
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    height: 60,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: '#eee',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 12,
    color: '#666',
  },
  activeTabText: {
    color: '#0c4650',
    fontWeight: 'bold',
  },
  placeholderScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  placeholderText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default AppNavigator;
