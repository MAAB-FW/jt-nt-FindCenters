import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({title, subtitle}) => {
  return (
    <View style={styles.container}>
      <View style={styles.pCon}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <View>
          <Text style={styles.icon}>💬</Text>
        </View>
      </View>
      <View style={styles.searchButton}>
        <TextInput placeholder="Search center" placeholderTextColor="#666" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  pCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    marginBottom: 12,
  },
  title: {
    fontSize: 22,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4f4f4f',
    marginTop: 4,
  },
  icon: {
    fontSize: 26,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    flexDirection: 'row',
    gap: 8,
  },
  searchText: {
    color: '#666',
  },
});

export default Header;
