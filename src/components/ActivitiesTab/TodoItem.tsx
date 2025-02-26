import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Todo} from '../../hooks/useTodos';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({todo}) => {
  const {title, completed, id} = todo;

  return (
    <TouchableOpacity style={styles.container}>
      <View
        style={[
          styles.statusIndicator,
          completed ? styles.completed : styles.pending,
        ]}
      />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <View style={styles.footer}>
          <Text style={styles.id}>Task #{id}</Text>
          <Text
            style={[
              styles.status,
              completed ? styles.completedText : styles.pendingText,
            ]}>
            {completed ? 'Completed' : 'Pending'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 2,
    boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.05)',
    // elevation: 2,
  },
  statusIndicator: {
    width: 4,
    borderRadius: 2,
    marginRight: 12,
  },
  completed: {
    backgroundColor: '#4CAF50',
  },
  pending: {
    backgroundColor: '#FF9800',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  id: {
    fontSize: 12,
    color: '#666',
  },
  status: {
    fontSize: 12,
    fontWeight: '500',
  },
  completedText: {
    color: '#4CAF50',
  },
  pendingText: {
    color: '#FF9800',
  },
});

export default TodoItem;
