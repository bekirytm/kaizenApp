import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DiscoverScreen from '../../screen/discover';
import DetailScreen from '../../screen/discover/detail';
const DiscoverStack = createNativeStackNavigator();

const DiscoverNavigation = () => {
  return (
    <DiscoverStack.Navigator options={{headerShown: false}}>
      <DiscoverStack.Screen
        name="DiscoverScreen"
        component={DiscoverScreen}
        options={{headerShown: false}}
      />

      {/*<DiscoverStack.Screen*/}
      {/*  name="Detail"*/}
      {/*  component={DetailScreen}*/}
      {/*  options={{headerShown: false}}*/}
      {/*/>*/}
    </DiscoverStack.Navigator>
  );
};
export default DiscoverNavigation;
