import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const HeaderTitle = props => {
  return(
    <View style={styles.header}>
      <Text style={{...styles.text, ...props.style }}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#cc5a13",
    padding: 15
  },
  text: {
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 1
  }
});

export default HeaderTitle;