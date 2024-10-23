# Coding Standards

## General Guidelines
- Use TypeScript for type safety
- Follow ESLint configuration
- Use Prettier for formatting

## Component Structure
```typescript
import React from 'react';
import { StyleSheet } from 'react-native';

interface Props {
  // Props definition
}

export const Component: React.FC<Props> = ({ prop }) => {
  // Component logic
  return (
    // JSX
  );
};

const styles = StyleSheet.create({
  // Styles
});
```

## State Management
- Use Redux Toolkit for global state
- Use React Context for theme/auth
- Use local state for component-specific data

## Testing
- Write unit tests for utils
- Write integration tests for features
- Use React Testing Library
