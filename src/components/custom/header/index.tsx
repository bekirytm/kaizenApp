import React, {useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {DahaLogoIcon, ProfileIcon} from '../../icons';
const {width} = Dimensions.get('window');

type Props = {};

const HeaderCard = (props: Props) => {
  const [active, setActive] = useState(false);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
          alignItems: 'center',
        }}>
        <View>
          <DahaLogoIcon />
        </View>

        <View style={{flexDirection: 'row'}}>
          {!active && (
            <TouchableOpacity
              onPress={() => setActive(true)}
              style={styles.loginButton}>
              <Text style={{fontWeight: 'bold', color: '#fff'}}>Giriş Yap</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={() => setActive(prevState => !prevState)}
            style={[
              styles.profileButton,
              {backgroundColor: active ? '#F40000' : '#1D1E1C'},
            ]}>
            {active && (
              <View style={styles.badgeIcon}>
                <View style={styles.greenCircle} />
              </View>
            )}
            <ProfileIcon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
  },
  loginButton: {
    width: 90,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F40000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 99,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeIcon: {
    width: 12,
    height: 12,
    backgroundColor: '#fff',
    position: 'absolute',
    right: 1,
    top: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 99,
  },
  greenCircle: {
    width: 7,
    height: 7,
    borderRadius: 99,
    backgroundColor: '#009639',
  },
});

export default HeaderCard;
