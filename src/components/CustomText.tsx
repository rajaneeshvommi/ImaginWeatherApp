import React, {ReactNode} from 'react';
import {Text , StyleSheet} from 'react-native';

export interface textProps {
    style ?: {},
    children: ReactNode
}

export default function CustomText({style, children}: textProps) {
  return  <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
    text:{
        fontSize:20,
    },
});
