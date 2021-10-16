import React, {useEffect} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => navigation.navigate('Home'), 2500);
  }, []);

  return (
    <View style={stylesheets.wrapper}>
      <View>
        <Image
          style={stylesheets.logo}
          source={require('../assets/img/scooty.png')}
        />
        <Text style={stylesheets.title}>SCOOTY</Text>
        <Text style={stylesheets.description}>ride your scooter now</Text>
      </View>
    </View>
  );
}

const stylesheets = StyleSheet.create({
  wrapper: {
    backgroundColor: '#ecefff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 25,
    color: '#333',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  description: {
    color: '#666',
    fontStyle: 'italic',
  },
});
