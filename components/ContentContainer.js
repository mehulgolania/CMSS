import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

const ContentContainer = props => {
  return(
    <View style={{...styles.container, ...props.style}}>
      <ScrollView style={styles.innerSpacing}>
        {props.children}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  innerSpacing: {
    paddingTop: 40,
    paddingHorizontal: 15,
    paddingBottom: 15,
  }
});

export default ContentContainer;