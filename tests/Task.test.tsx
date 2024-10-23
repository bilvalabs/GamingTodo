import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Task } from '../src/components/Task';

describe('Task Component', () => {
  it('renders correctly', () => {
    const task = {
      id: '1',
      title: 'Test Task',
      completed: false,
      suggestedTime: '10:00',
      priority: 'Medium' as const,
      createdAt: new Date().toISOString(),
    };

    const { getByText } = render(
      <Task
        task={task}
        onComplete={() => {}}
        onDelete={() => {}}
      />
    );

    expect(getByText('Test Task')).toBeTruthy();
  });
});
