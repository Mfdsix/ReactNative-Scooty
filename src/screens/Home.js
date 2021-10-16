import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';

export default function Home({navigation}) {
  function goToTrip() {
    navigation.navigate('Trip');
  }

  return (
    <View style={stylesheets.wrapper}>
      <ScrollView>
        {/* profile */}
        <View style={profileStyles.wrapper}>
          <Image
            style={profileStyles.userPhoto}
            source={require('../assets/img/user.png')}
          />
          <View style={profileStyles.textWrapper}>
            <Text style={profileStyles.helloText}>Hello, Ma Puth</Text>
            <Text style={profileStyles.welcomeText}>
              Welcome back to your account
            </Text>
          </View>
          <Icon
            name="ellipsis-vertical-outline"
            type="ionicon"
            style={profileStyles.action}
          />
        </View>
        {/* slider */}
        <View style={sliderStyles.wrapper}>
          <View style={sliderStyles.backWrapper}></View>
          <View style={sliderStyles.middleWrapper}></View>
          <View style={sliderStyles.frontWrapper}>
            <Text style={sliderStyles.title}>You Reached New Achievement</Text>
            <Text style={sliderStyles.description}>
              You just reach 45km of trip range yesterday. Ride more trips to
              get more achievements.
            </Text>
          </View>
          <Image
            style={sliderStyles.scooty}
            source={require('../assets/img/scooty.png')}
          />
        </View>
        {/* statistic */}
        <View>
          <View style={statisticStyles.rowWrapper}>
            <View
              style={[
                statisticStyles.itemWrapper,
                {
                  backgroundColor: '#fff3ec',
                  marginEnd: 5,
                },
              ]}>
              <Icon name="map-outline" type="ionicon" />
              <Text style={statisticStyles.title}>Total Distance</Text>
              <Text style={statisticStyles.value}>340 km</Text>
            </View>
            <View
              style={[
                statisticStyles.itemWrapper,
                {
                  backgroundColor: '#e9faf7',
                  marginStart: 5,
                },
              ]}>
              <Icon name="bicycle-outline" type="ionicon" />
              <Text style={statisticStyles.title}>Last Ride</Text>
              <Text style={statisticStyles.value}>24 km</Text>
            </View>
          </View>
          <View style={statisticStyles.rowWrapper}>
            <View
              style={[
                statisticStyles.itemWrapper,
                {
                  backgroundColor: '#ffeaed',
                  marginEnd: 5,
                },
              ]}>
              <Icon name="battery-half-outline" type="ionicon" />
              <Text style={statisticStyles.title}>Fuel Left</Text>
              <Text style={statisticStyles.value}>74%</Text>
            </View>
            <View
              style={[
                statisticStyles.itemWrapper,
                {
                  backgroundColor: '#efefff',
                  marginStart: 5,
                },
              ]}>
              <Icon name="rocket-outline" type="ionicon" />
              <Text style={statisticStyles.title}>Average Speed</Text>
              <Text style={statisticStyles.value}>22 km/h</Text>
            </View>
          </View>
        </View>
        {/* histori */}
        <View>
          <Text style={historyStyles.headerText}>Your Trip History</Text>
          <TouchableOpacity onPress={() => goToTrip()}>
            <View style={historyStyles.wrapper}>
              <View style={historyStyles.itemWrapper}>
                <View style={historyStyles.iconWrapper}>
                  <Icon name="map-outline" type="ionicon" />
                </View>
                <View>
                  <Text style={historyStyles.title}>Kertomulyo Beach</Text>
                  <Text style={historyStyles.description}>Trangkil</Text>
                </View>
              </View>
              <Icon
                style={historyStyles.detailIcon}
                name="arrow-forward-outline"
                type="ionicon"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => goToTrip()}>
            <View style={historyStyles.wrapper}>
              <View style={historyStyles.itemWrapper}>
                <View style={historyStyles.iconWrapper}>
                  <Icon name="map-outline" type="ionicon" />
                </View>
                <View>
                  <Text style={historyStyles.title}>Rolet View</Text>
                  <Text style={historyStyles.description}>Keling</Text>
                </View>
              </View>
              <Icon
                style={historyStyles.detailIcon}
                name="arrow-forward-outline"
                type="ionicon"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => goToTrip()}>
            <View style={historyStyles.wrapper}>
              <View style={historyStyles.itemWrapper}>
                <View style={historyStyles.iconWrapper}>
                  <Icon name="map-outline" type="ionicon" />
                </View>
                <View>
                  <Text style={historyStyles.title}>Pasar Tayu</Text>
                  <Text style={historyStyles.description}>Tayu</Text>
                </View>
              </View>
              <Icon
                style={historyStyles.detailIcon}
                name="arrow-forward-outline"
                type="ionicon"
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const stylesheets = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
  },
});
const profileStyles = StyleSheet.create({
  wrapper: {
    marginTop: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userPhoto: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
  textWrapper: {
    justifyContent: 'center',
  },
  helloText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  welcomeText: {
    color: '#333',
    fontSize: 12,
  },
  action: {
    marginStart: 30,
    alignSelf: 'flex-end',
  },
});
const sliderStyles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    marginTop: 40,
    height: 200,
  },
  backWrapper: {
    position: 'absolute',
    top: 0,
    left: 40,
    right: 40,
    backgroundColor: '#c89efa',
    height: 100,
    borderRadius: 10,
  },
  middleWrapper: {
    position: 'absolute',
    top: 10,
    left: 20,
    right: 20,
    backgroundColor: '#b06ffb',
    height: 100,
    borderRadius: 10,
  },
  frontWrapper: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    backgroundColor: '#9840ff',
    borderRadius: 10,
    padding: 30,
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
  description: {
    color: '#fff',
    fontSize: 12,
    marginTop: 10,
    fontStyle: 'italic',
  },
  scooty: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 120,
    height: 120,
    resizeMode: 'cover',
  },
});
const statisticStyles = StyleSheet.create({
  rowWrapper: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  itemWrapper: {
    flex: 1,
    padding: 20,
    borderRadius: 20,
    alignItems: 'flex-start',
  },
  title: {
    marginTop: 10,
    fontSize: 12,
    color: '#666',
  },
  value: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
const historyStyles = StyleSheet.create({
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
  },
  wrapper: {
    borderRadius: 5,
    borderWidth: 0.1,
    borderColor: '#333',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    marginEnd: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ecefff',
    justifyContent: 'center',
  },
  title: {
    color: '#333',
    fontSize: 16,
  },
  description: {
    color: '#333',
    fontSize: 12,
  },
  detailIcon: {
    marginStart: 20,
  },
});
