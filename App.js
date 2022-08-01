import React from 'react';
import Main from './src/components/main.jsx';
import { NativeRouter } from 'react-router-native';
import { StatusBar } from 'expo-status-bar';
import { ApolloProvider } from '@apollo/client/react';
import createApolloClient from './src/utils/apolloClient.js';

const apolloClient = createApolloClient()

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <StatusBar style='ligth' />
      <NativeRouter>
        <Main />
      </NativeRouter>
    </ApolloProvider>
    
  );
}
