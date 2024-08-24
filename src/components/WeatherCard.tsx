import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function WeatherCard(props) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View>
          <Text style={styles.locationText}>{props.title}</Text>
        </View>
        <View>
          <Text style={styles.locationText}>{props.value}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    borderRadius: 10,
    padding: 20,
    width: 300,
    height: 100,
    justifyContent: 'space-between',
    marginVertical:10,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});