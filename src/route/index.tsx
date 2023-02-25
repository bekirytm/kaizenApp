import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainNavigation from './main';
import DetailScreen from '../screen/discover/detail';

type Props = {};
const RootStack = createNativeStackNavigator();

const Router = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={'Main'}
        component={MainNavigation}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name={'Detail'}
        component={DetailScreen}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};

export default Router;
