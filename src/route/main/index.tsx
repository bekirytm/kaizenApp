import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DiscoverNavigation from '../discover';
import HomeNavigation from '../home';
import WalletNavigation from '../wallet';
import {DiscoverIcon, HomeIcon, StarIcon} from '../../components/icons';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={'Discover'}
        component={DiscoverNavigation}
        options={{
          tabBarLabel: ({focused}) =>
            focused ? (
              <Text style={styles.activeTitle}>KEŞFET</Text>
            ) : (
              <Text style={styles.passiveTitle}>KEŞFET</Text>
            ),
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <DiscoverIcon
                width={25}
                height={25}
                color={'#000000'}
                style={{marginBottom: 3}}
              />
            ) : (
              <DiscoverIcon
                color={'#bbbcbb'}
                width={25}
                height={25}
                style={{marginBottom: 3}}
              />
            ),
        }}
      />
      <Tab.Screen
        name={'Home'}
        component={HomeNavigation}
        // options={{headerShown: false}}
        options={{
          tabBarButton: props => (
            <View>
              <TouchableOpacity
                activeOpacity={0.8}
                {...props}
                style={{
                  marginBottom: 20,
                  position: 'absolute',
                  bottom: -33,
                  left: -12,
                }}>
                <HomeIcon />
              </TouchableOpacity>
              <View style={{width: 50}}>
                <Text></Text>
              </View>
            </View>
          ),
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <HomeIcon
                width={17}
                height={17}
                color={'#28AF6E'}
                style={{marginBottom: 3}}
              />
            ) : (
              <HomeIcon
                color={'#BDBDBD'}
                width={17}
                height={17}
                style={{marginBottom: 3}}
              />
            ),
        }}
      />
      <Tab.Screen
        name={'Wallet'}
        component={WalletNavigation}
        options={{
          tabBarLabel: ({focused}) =>
            focused ? (
              <Text style={styles.activeTitle}>DAHA CÜZDAN</Text>
            ) : (
              <Text style={styles.passiveTitle}>DAHA CÜZDAN</Text>
            ),
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <StarIcon
                width={25}
                height={25}
                color={'#000000'}
                style={{marginBottom: 3}}
              />
            ) : (
              <StarIcon
                color={'#bbbcbb'}
                width={25}
                height={25}
                style={{marginBottom: 3}}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  activeTitle: {
    fontSize: 11,
    color: '#000000',
  },
  passiveTitle: {
    fontSize: 11,
    color: '#bbbcbb',
  },
});

export default MainNavigation;
