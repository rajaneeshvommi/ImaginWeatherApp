import React, {useState} from 'react';
import { View, StyleSheet,TextInput, TouchableOpacity } from 'react-native';
import BGConatiner from '../components/BGImageContainer';
import Icon from 'react-native-vector-icons/Ionicons';


function HomeScreen({ navigation }) {

    const [city, setCity] = useState('');

    const navigatiToWeatherDetailScreen = () =>{
        if(city){
            navigation.navigate('Weather Report',{cityName:city });
            setCity("");
        }else{
            alert('Please the enter the city');
        }
    };
    return (
      <View style={styles.container}>
        <BGConatiner>
        <View style={styles.subContainer}>
        <View
            style={styles.inputContainer}>
            <TextInput
              value={city}
              onChangeText={inputText => setCity(inputText)}
              placeholder="Search City"
              placeholderTextColor="white"
              style={styles.inputTextStyle}
            />
            <TouchableOpacity onPress={navigatiToWeatherDetailScreen}>
              <Icon name="search" size={22} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        </BGConatiner>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    subContainer:{flex:1, paddingVertical:100, paddingHorizontal:20},
    text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
    inputTextStyle:{paddingHorizontal: 10, color: 'white', fontSize: 16},
    inputContainer:{
        flexDirection: 'row',
        height:50,
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: 50,
          borderWidth: 1,
          borderColor: 'white',
          paddingHorizontal: 10,
        },
  });

  export default HomeScreen;
