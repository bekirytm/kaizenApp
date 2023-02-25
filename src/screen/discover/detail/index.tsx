import React from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {BackButtonIcon} from '../../../components/icons';
const {width, height} = Dimensions.get('window');

type Props = {
  navigation: any;
};

const DetailScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={{height: 370}}>
        <Image
          style={{width: width, height: 370}}
          source={require('../../../assets/images/detailImage.png')}
        />

        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={{position: 'absolute', left: 15, top: 55}}>
          <BackButtonIcon />
        </TouchableOpacity>

        <View>
          <Image
            style={styles.absoluteImage}
            source={require('../../../assets/images/cocacolaImage.png')}
          />
        </View>

        <View style={styles.absoluteTitle}>
          <Text style={{color: '#fff', fontSize: 12, fontWeight: '600'}}>
            son 12 gün
          </Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 15, height: height - 470}}>
        <Text style={{fontSize: 26, fontWeight: 'bold'}}>
          Her Altın Kapakta Bir {'\n'}Coca-Cola + Coffee Keyfi
        </Text>

        <View style={{marginTop: 50, marginBottom: 100}}>
          <Text style={{color: '#1D1E1C', fontWeight: '400', lineHeight: 22}}>
            Coca-Cola Coffee, kolanın lezzetini kahve aroması ile bir araya
            getirir. Brezilya kahve çekirdeklerinin lezzetiyle aromalanan Coca
            Cola, geleneksel lezzetine modern bir yorum katarak raflarda yer
            alır.{'\n'}
            {'\n'}
            {'\n'}Yeni tatlara açık olanların beğenisini kazanan kahveli
            Coca-Cola, kutu tasarımı ile çantada bile kolaylıkla taşınır. Kahve
            tiryakilerinin bir yudum ferahlık istediği anlarda tercihi olacak
            ürün, dünyada en çok yankı uyandıran kola edisyonları arasında yer
            almaktadır.{'\n'}
            {'\n'}
            {'\n'}İçeceğin soğuk tüketilmesi önerilir. Buzla beraber içilebilir.
            Özellikle sıcak yaz günlerinde ferahlatıcı etki gösterir.
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          height: 100,
          width: width,
          paddingTop: 10,
          alignItems: 'center',
        }}>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={{fontWeight: 'bold', fontSize: 14, color: '#fff'}}>
            Hemen Katıl
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    // paddingTop: getStatusBarHeight(),
  },
  buttonStyle: {
    width: width * 0.8,
    backgroundColor: '#F40000',
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  absoluteTitle: {
    position: 'absolute',
    right: 15,
    bottom: 37,
    width: 100,
    height: 30,
    borderRadius: 25,
    backgroundColor: '#1D1E1C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  absoluteImage: {
    width: 55,
    height: 55,
    position: 'absolute',
    left: 10,
    bottom: 20,
  },
});

export default DetailScreen;
