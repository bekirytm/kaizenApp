import React, {useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Carousel from 'react-native-reanimated-carousel';
import {BackIcon} from '../../icons';
type Props = {
  navigation: any;
  value: number | any;
};

const CarouselArea = (props: Props) => {
  const [active, setActive] = useState(0);

  const mockData = [
    {
      title: '2,5 LT Coca-Cola kapakları\n Coca-Cola +Coffee kazandırıyor!',
      image: require('../../../assets/images/cocacolaCarousel.png'),
      badgeImage: require('../../../assets/images/cocacolaImage.png'),
      color: '#FF0023',
    },
    {
      title: '2,5 LT Sprite kapakları\n 330 ML Kutu kazandırıyor!',
      image: require('../../../assets/images/spriteCarousel.png'),
      badgeImage: require('../../../assets/images/spriteImage.png'),
      color: '#009639',
    },
    {
      title: '2,5 LT Coca-Cola kapakları\n Coca-Cola +Coffee kazandırıyor!',
      image: require('../../../assets/images/cocacolaCarousel.png'),
      badgeImage: require('../../../assets/images/cocacolaImage.png'),
      color: '#FF0023',
    },
    {
      title: '2,5 LT Sprite kapakları\n 330 ML Kutu kazandırıyor!',
      image: require('../../../assets/images/spriteCarousel.png'),
      badgeImage: require('../../../assets/images/spriteImage.png'),
      color: '#009639',
    },
  ];

  const mockData2 = [
    {
      title: '2,5 LT Sprite kapakları\n 330 ML Kutu kazandırıyor!',
      image: require('../../../assets/images/spriteCarousel.png'),
      badgeImage: require('../../../assets/images/spriteImage.png'),
      color: '#009639',
    },
    {
      title: '2,5 LT Coca-Cola kapakları\n Coca-Cola +Coffee kazandırıyor!',
      image: require('../../../assets/images/cocacolaCarousel.png'),
      badgeImage: require('../../../assets/images/cocacolaImage.png'),
      color: '#FF0023',
    },
    {
      title: '2,5 LT Sprite kapakları\n 330 ML Kutu kazandırıyor!',
      image: require('../../../assets/images/spriteCarousel.png'),
      badgeImage: require('../../../assets/images/spriteImage.png'),
      color: '#009639',
    },
    {
      title: '2,5 LT Coca-Cola kapakları\n Coca-Cola +Coffee kazandırıyor!',
      image: require('../../../assets/images/cocacolaCarousel.png'),
      badgeImage: require('../../../assets/images/cocacolaImage.png'),
      color: '#FF0023',
    },
    {
      title: '2,5 LT Sprite kapakları\n 330 ML Kutu kazandırıyor!',
      image: require('../../../assets/images/spriteCarousel.png'),
      badgeImage: require('../../../assets/images/spriteImage.png'),
      color: '#009639',
    },
  ];

  const card = (item, index) => {
    return (
      <>
        <View
          style={{
            width: width * 1.3,
            height: '100%',
            position: 'absolute',
            left: 0,
            bottom: -113,
            // zIndex: -999,
          }}>
          <BackIcon width={width} color={item.color} />
        </View>
        <View style={styles.cardArea}>
          <View style={{backgroundColor: '#fff', borderRadius: 20}}>
            <Image
              style={{width: '100%', height: '66.5%'}}
              source={item.image}
            />
            <View style={{position: 'absolute', left: 10, top: '53%'}}>
              <Image source={item.badgeImage} />
            </View>

            <TouchableOpacity
              style={{height: '33%'}}
              onPress={() => props.navigation.navigate('Detail')}>
              <View style={{height: '65%', justifyContent: 'center'}}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 15,
                    fontWeight: 'bold',
                    letterSpacing: 1,
                  }}>
                  {item.title}
                </Text>
              </View>

              <View
                style={{
                  height: '35%',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: item.color,
                    letterSpacing: 1.6,
                  }}>
                  Daha Daha
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        mode="parallax"
        width={width}
        height={height * 0.55}
        autoPlay={true}
        autoPlayInterval={5000}
        data={props.value % 2 === 0 ? mockData : mockData2}
        scrollAnimationDuration={1000}
        onSnapToItem={index => setActive(index)}
        renderItem={({item, index}) => card(item, index)}
      />
      <View style={{flexDirection: 'row'}}>
        {(props.value % 2 === 0 ? mockData : mockData2).map((item, index) => {
          return (
            <View style={active === index ? styles.active : styles.passive} />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  cardArea: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#F4F6F5',
    borderRadius: 20,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    zIndex: 9999,
  },
  active: {
    width: 19,
    height: 8,
    borderRadius: 99,
    backgroundColor: '#F40000',
    marginHorizontal: 2,
  },
  passive: {
    width: 8,
    height: 8,
    borderRadius: 99,
    backgroundColor: '#D8D8D8',
    marginHorizontal: 2.5,
  },
});

export default CarouselArea;
