import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { useAuth } from '../contexts/auth';

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

const Routes: React.FC = () => {
  const { signed, loading } = useAuth();

  new Promise((resolve => setTimeout(resolve, 2000)));

  if (loading) {
    // RNSplashScreen.hide();
    return (
      <View style={ styles.container }>
        <ActivityIndicator size="large" color="#667" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
