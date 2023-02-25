import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WalletScreen from '../../screen/wallet';
const WalletStack = createNativeStackNavigator();

const WalletNavigation = () => {
  return (
    <WalletStack.Navigator options={{headerShown: false}}>
      <WalletStack.Screen
        name="WalletScreen"
        component={WalletScreen}
        options={{headerShown: false}}
      />
    </WalletStack.Navigator>
  );
};
export default WalletNavigation;
