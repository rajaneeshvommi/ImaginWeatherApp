import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import BGConatiner from '../components/BGImageContainer';
import useFetch from '../hooks/useFetch';
import { API_KEY } from '../utility/constants';
import WeatherCard from '../components/WeatherCard';

function DetailsScreen(props) {
    const {cityName} = props.route.params;
    const [data] = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`);

    return (
      <View style={styles.container}>
        <BGConatiner>
            {data ? <View style={styles.subContainer}>
        <View style={styles.mainTextContainer}>
            <Text style={styles.cityTextStyle}>{cityName}</Text>
              <Text style={styles.weatherTextStyle}>
                {data?.weather?.[0].main}
              </Text>
              <Text style={styles.tempTextStyle}>
              {(data?.main?.temp - 273).toFixed(2)}&deg; C
            </Text>
        </View>
        <View style={styles.weatherDetailsCardConatiner}>
         <WeatherCard value={data?.wind?.speed} title={"Wind"}/>
         <WeatherCard value={data?.main?.pressure} title={"Pressure"}/>
         <WeatherCard value={data?.main?.humidity} title={"Humidity"}/>
        </View>
        </View> : null}
        </BGConatiner>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    mainTextContainer:{
        flex:0.3,
        paddingVertical:20, justifyContent:'center', alignItems:'center',
    },
    subContainer:{
        flex:1,alignItems:'center',
    },
    cityTextStyle:{color: 'white', fontSize: 40},
    weatherTextStyle: {fontSize: 22, color: 'white'},
    tempTextStyle:{color: 'white', fontSize: 50, paddingTop:25},
    weatherDetailsCardConatiner:{
        flex:0.7
    }

  });

  export default DetailsScreen;