import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomText from '../components/CustomText';


export default function WeatherCard(props :{data: any}) {
  const {data} = props;
  return (
    <View style={styles.card}>
    <View style={styles.tabelHeaderContainer}>
      <CustomText>Date: { data.dt}</CustomText>
    </View>
    <View style={styles.tabelSubHeaderContainer}>
      <CustomText>Temperature</CustomText>
    </View>
    <View style={styles.content}>
      <View style={styles.row}>
        <View style={styles.cell}>
          <CustomText>Min</CustomText>
        </View>
        <View style={styles.cell1}>
          <CustomText>Max</CustomText>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <CustomText>{data?.main?.temp_min}</CustomText>
        </View>
        <View style={styles.cell1}>
          <CustomText >{data?.main?.temp_max}</CustomText>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <CustomText >{'Pressure'}</CustomText>
        </View>
        <View style={styles.cell1}>
          <CustomText >{data?.main?.pressure}</CustomText>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <CustomText >{'Humidity'}</CustomText>
        </View>
        <View style={styles.cell1}>
          <CustomText>{data?.main?.humidity}</CustomText>
        </View>
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#000',
    borderBottomWidth: 0,
    margin:25,
  },
  tabelHeaderContainer: {
    backgroundColor: '#f86605',
    padding: 10,
    borderBottomWidth:1,
    alignItems:'center',
  },
  tabelSubHeaderContainer:{
    backgroundColor: '#cccccc',
    padding: 10,
    borderBottomWidth:1,
    alignItems:'center',
  },
  headerText: {
    fontSize:20,
    textAlign:'center',
  },
  content: {
    backgroundColor: '#ccc',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    alignItems: 'center',
    padding:10,
    borderBottomWidth:1,
    borderRightWidth:1,
  },
  cell1: {
    flex: 1,
    alignItems: 'center',
    padding:5,
    borderBottomWidth:1,
  },
  label: {
    fontSize: 14,
  },
});