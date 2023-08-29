import { StatusBar } from 'expo-status-bar';
import React from 'react';
import IndexScreen from './src/index';

export default function App() {
  return (
    <>
      <IndexScreen />
      <StatusBar style="auto" />
    </>
  );
}
