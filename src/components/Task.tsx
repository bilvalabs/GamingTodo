import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TaskType } from '../types';

interface Props {
  task: TaskType;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export const Task: React.FC<Props> = ({ task, onComplete, onDelete }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onComplete(task.id)}>
        <View style={[styles.checkbox, task.completed && styles.checked]} />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.title}>{task.title}</Text>
        <Text style={styles.subtitle}>{task.suggestedTime}</Text>
      </View>
      <TouchableOpacity onPress={() => onDelete(task.id)}>
        <Text style={styles.delete}>×</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#007AFF',
    marginRight: 10,
  },
  checked: {
    backgroundColor: '#007AFF',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  delete: {
    fontSize: 24,
    color: '#FF3B30',
    paddingHorizontal: 10,
  },
});
