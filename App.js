import React from 'react';
import Main from './src/components/main.jsx';
import { NativeRouter } from 'react-router-native';

export default function App() {
  return (
    <NativeRouter>
      <Main />
    </NativeRouter>
    
  );
}
