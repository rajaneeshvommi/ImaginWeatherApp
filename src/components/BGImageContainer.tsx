import React, {useState} from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

function BGConatiner(props) {
    const [currentImage, setCurrentImage] = useState(require('../assets/images/image3.jpg'));
    return (
      <View style={styles.container}>
        <ImageBackground source={currentImage} resizeMode="cover" style={styles.container}>
            {props.children}
        </ImageBackground>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      opacity:0.9,
      backgroundColor:'#00000'
    },
  });

  export default BGConatiner;