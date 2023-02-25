import React from 'react';
import {StyleSheet, Dimensions, View, Text} from 'react-native';
const {width} = Dimensions.get('window');

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
