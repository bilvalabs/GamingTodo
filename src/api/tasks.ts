import { TaskType } from '../types';

export const tasksApi = {
  async getTasks(): Promise<TaskType[]> {
    // Implementation
    return [];
  },
  
  async createTask(task: Omit<TaskType, 'id'>): Promise<TaskType> {
    // Implementation
    return {} as TaskType;
  },
  
  async updateTask(id: string, updates: Partial<TaskType>): Promise<TaskType> {
    // Implementation
    return {} as TaskType;
  },
  
  async deleteTask(id: string): Promise<void> {
    // Implementation
  },
};
