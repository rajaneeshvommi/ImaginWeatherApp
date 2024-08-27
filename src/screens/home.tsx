import React, {useState} from 'react';
import { View, StyleSheet,TextInput, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

import CustomText from '../components/CustomText';
import WeatherCard from '../components/WeatherCard';
import { API_KEY } from '../utility/constants';

// const EmptyList = () => {
//   return(
//       <View style={{justifyContent:'center'}}>
//       <CustomText>The list is empty</CustomText>
//       <View>)
// };

function HomeScreen() {

    const [cityName, setCity] = useState('');
    const [weatherData, setWeatherData ] = useState([]);

    const searchCityWeather = async () =>{
        if(cityName){
           const weatherDataResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`);
           const cityWeatherData = await weatherDataResponse.json();
           console.log(cityWeatherData, 'cityWeatherData');
           const modifiedWeatherData = cityWeatherData.list.map(currentElement  =>{
            currentElement.dt = moment.unix(currentElement.dt).format('YYYY-MM-DD');
            return currentElement;
           });
           console.log(modifiedWeatherData);
           const FinalList = modifiedWeatherData.filter((currentElement,index, self)=> index === self.findIndex((value)=> value.dt === currentElement.dt));
           console.log(FinalList);
           setWeatherData(FinalList);
          //  setCity('')
        }else{
            alert('Please the enter the city');
        }
    };
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <CustomText style={styles.titleTextStyle}>{'Weather in your city'}</CustomText>
          <View
            style={styles.inputContainer}>
            <TextInput
              value={cityName}
              onChangeText={inputText => setCity(inputText)}
              placeholder="Search City"
              style={styles.inputTextStyle}
            />
          </View>
            <TouchableOpacity onPress={searchCityWeather} style={styles.searchButtonContainer}>
              <Icon name="question-circle" size={24} color="white" />
              <CustomText style={styles.searchText}>{'Search'}</CustomText>
            </TouchableOpacity>
        </View>
        <View style={styles.subContainer2}>
           <FlatList
            data={weatherData}
            renderItem={({item}) => <WeatherCard data={item}/>}
            keyExtractor={item => item?.dt}
            ListEmptyComponent ={() => (!weatherData.length ?
              <CustomText style={styles.emptyTextStyle}>The list is empty</CustomText>
              : null)}
            />
          </View>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#fff',
    },
    subContainer:{flex:0.4, justifyContent:'center', alignItems:'center'},
    subContainer2: {flex:0.7},
    titleTextStyle: {fontSize:40, paddingVertical:25, color:'#d26c23'},
    inputTextStyle:{
      fontSize: 16,
       width:'75%',
      height:50},
    inputContainer:{
        width:'75%',
        height:50,
        justifyContent: 'center',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#d26c23',
        paddingHorizontal: 20,
        },
    searchButtonContainer:{
      backgroundColor:'#d26c23',
       paddingVertical:10,
       paddingHorizontal:20,
       borderRadius:6,
       flexDirection:'row',
       justifyContent:'center',
       alignItems:'center',
       marginVertical:25,
      },
    searchText:{paddingHorizontal:10, color:'#fff'},
    emptyTextStyle: {textAlign:'center'},
  });

  export default HomeScreen;
