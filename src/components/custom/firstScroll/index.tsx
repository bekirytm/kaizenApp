import React, {useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Burgerking, Search, SpriteIcon, Trendyol} from '../../icons';
const {width} = Dimensions.get('window');

type Props = {
  change: (e: number) => void;
};

const FirstScroll = (props: Props) => {
  const [active, setActive] = useState(null);
  const mock = [
    {
      title: 'Fırsat Bul',
      icon: <Search />,
    },
    {
      title: 'Burger King',
      icon: <Burgerking />,
    },
    {
      title: 'Trendyol',
      icon: <Trendyol />,
    },
    {
      title: 'Sprite',
      icon: <SpriteIcon />,
    },
  ];

  const card = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setActive(index);
          props.change(index);
        }}
        key={index}
        style={[
          styles.card,
          {borderColor: active === index ? '#F40000' : '#ECEEEF'},
        ]}>
        <View style={{marginRight: 7}}>{item.icon}</View>
        <View style={{width: 60}}>
          <Text numberOfLines={1} style={{fontSize: 10, fontWeight: '400'}}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{
          height: 50,
          width: '100%',
          paddingLeft: 15,
        }}>
        {mock.map((item, index) => {
          return card(item, index);
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  card: {
    height: 36,
    borderRadius: 10,
    borderWidth: 1,
    marginRight: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    justifyContent: 'space-between',
  },
});

export default FirstScroll;
