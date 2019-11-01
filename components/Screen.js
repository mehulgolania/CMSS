import React from 'react';
import { StyleSheet, View } from 'react-native';

const Screen = props => {
  return(
    <View style={{...styles.screen, ...props.style}}>{props.children}</View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default Screen;