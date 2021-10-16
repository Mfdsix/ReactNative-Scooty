import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import {Icon} from 'react-native-elements';

const dimensions = Dimensions.get('window');

export default function Trip({navigation}) {
  function goToHome() {
    navigation.navigate('Home');
  }

  return (
    <View style={stylesheets.wrapper}>
      <Image
        height={dimensions.height}
        width={dimensions.width}
        style={stylesheets.image}
        source={require('../assets/img/map.png')}
      />
      {/* header */}
      <View style={headerStyles.wrapper}>
        <View style={headerStyles.backWrapper}>
          <TouchableOpacity onPress={() => goToHome()}>
            <Icon name="arrow-back-outline" type="ionicon" />
          </TouchableOpacity>
          <Text style={headerStyles.title}>Previous Trip</Text>
        </View>
        <TouchableOpacity>
          <View style={headerStyles.filter}>
            <Icon name="filter-outline" type="ionicon" />
          </View>
        </TouchableOpacity>
      </View>
      {/* body */}
      <View style={bodyStyles.wrapper}>
        <View style={bodyStyles.iconWrapper}>
          <Icon name="map-outline" type="ionicon" />
        </View>
        <View>
          <Text style={bodyStyles.title}>From</Text>
          <Text style={bodyStyles.value}>Stonebridge Gardens</Text>
          <Text style={bodyStyles.title}>To</Text>
          <Text style={bodyStyles.value}>23 Richmond Street</Text>
        </View>
      </View>
    </View>
  );
}

const stylesheets = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  image: {
    width: dimensions.width,
    height: dimensions.height,
    resizeMode: 'cover',
  },
});
const headerStyles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  backWrapper: {
    backgroundColor: '#fff',
    padding: 10,
    flexDirection: 'row',
    borderRadius: 20,
    elevation: 10,
  },
  title: {
    marginStart: 10,
    color: '#333',
    fontWeight: 'bold',
    fontSize: 16,
  },
  filter: {
    alignItems: 'center',
    backgroundColor: '#9840ff',
    padding: 10,
    borderRadius: 20,
    elevation: 10,
  },
});
const bodyStyles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 20,
    left: 30,
    right: 30,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
    elevation: 10,
  },
  iconWrapper: {
    marginEnd: 20,
    padding: 25,
    borderRadius: 10,
    backgroundColor: '#ecefff',
    justifyContent: 'center',
  },
  title: {
    color: '#333',
    fontSize: 12,
  },
  value: {
    color: '#333',
    fontSize: 14,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});
