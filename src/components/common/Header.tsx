import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({title, subtitle}) => {
  return (
    <View style={styles.container}>
      <View style={styles.pCon}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <Text style={styles.icon}>💬</Text>
      </View>

      {/* searchbar */}
      <View style={styles.searchButton}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search center"
          placeholderTextColor="#0c4650"
        />
        <Text style={styles.searchIcon}>🔍</Text>
        <Text style={styles.moreOption}>☰</Text>
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
    paddingVertical: 8,
    paddingHorizontal: 16,
    paddingLeft: 50,
    marginTop: 16,
    borderRadius: 50,
    flexDirection: 'row',
    gap: 8,
    position: 'relative',
  },
  searchBar: {
    flex: 1,
    fontSize: 20,
  },
  searchIcon: {
    color: '#666',
    position: 'absolute',
    left: 18,
    top: 18,
    fontSize: 22,
  },
  moreOption: {
    color: '#a9d101',
    position: 'absolute',
    right: 20,
    top: 18,
    fontSize: 22,
    fontWeight: 'black',
    transform: [{rotate: '90deg'}],
  },
});

export default Header;
