import React from 'react';
import HeaderTitle from '../../components/HeaderTitle';
import AppButton from '../../components/AppButton';

import { StyleSheet, Text, View } from 'react-native';

class RegistrationCompleted extends React.Component{
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render(){
    return (
      <View style={styles.container}>
        <HeaderTitle 
          title="Registration Completed"
        />
        <View style={styles.modalWrapper}>
          <View style={styles.modal}>
            <View>
              <HeaderTitle 
                title="Registration" 
                style={{textAlign: "center"}} 
              />
            </View>

            <View style={styles.modalContent}>
              <Text style={styles.modalText}>You have successfuly registered in fullerton wallet.</Text>

              <AppButton 
                title="ok" 
                onPress={()=>{this.props.navigation.navigate('Register')}}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },  
  modalWrapper: {
    ...StyleSheet.absoluteFillObject,
    top: 0,
    backgroundColor: "rgba(0,0,0, 0.5)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modal:{
    width: "90%"
  },
  modalContent: {
    backgroundColor: "#fff",
    paddingVertical: 30,
    paddingHorizontal: 10
  },
  modalText: {
    marginBottom: 30,
    fontSize: 20
  }
});


export default RegistrationCompleted;