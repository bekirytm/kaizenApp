import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import FirstScroll from '../../components/custom/firstScroll';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {DahaLogoIcon, ProfileIcon} from '../../components/icons';
import CarouselArea from '../../components/custom/carousel';
import HeaderCard from '../../components/custom/header';
const StatusBarHeight = getStatusBarHeight();

type Props = {
  navigation: any;
};

const DiscoverScreen = (props: Props) => {
  const [selected, setSelected] = useState(0);

  return (
    <View style={styles.container}>
      <HeaderCard />
      <FirstScroll change={e => setSelected(e)} />

      <View style={{flex: 0.7}}>
        <CarouselArea navigation={props.navigation} value={selected} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
  },
});

export default DiscoverScreen;
