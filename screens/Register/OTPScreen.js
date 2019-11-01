import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Screen from '../../components/Screen';
import HeaderTitle from '../../components/HeaderTitle';
import ContentContainer from '../../components/ContentContainer';
import Input from '../../components/Input';
import AppButton from '../../components/AppButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

class OTPScreen extends React.Component{
  state = {
    value: ""
  }

  render(){
    const NumberButton = props => {
      return(
        <TouchableOpacity style={styles.button} onPress={()=>{handleOTP(props)}}>
          <Text style={styles.buttonText}>{props.value}</Text>
        </TouchableOpacity>
      );
    }

    const handleOTP = props => {
      if(this.state.value.length <= 5){
        this.setState({
          value: this.state.value.concat(props.value)
        });
      }
    }

    return (
      <Screen>
        <HeaderTitle 
          title="Enter OTP" 
          align="center"
        />

        <ContentContainer>
          <Input 
            multiline={false}
            placeholder="Enter the 6 digit OTP"
            editable={false}
            maxLength={6}
            value={this.state.value}
          />

          <View style={styles.numberButtonContainer}>
            <NumberButton value="1" />
            <NumberButton value="2" />
            <NumberButton value="3" />
            <NumberButton value="4" />
            <NumberButton value="5" />
            <NumberButton value="6" />
            <NumberButton value="7" />
            <NumberButton value="8" />
            <NumberButton value="9" />
            <NumberButton value="0" />
          </View>

          <AppButton 
            title="Submit" 
            onPress={()=>{this.props.navigation.navigate('RegisterCompleted');}}
          />
        </ContentContainer>      
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  button:{
    width: 80,
    height: 80,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 100,
    margin: 10,

    borderWidth: 1,
    borderColor: "#a24f23",
    backgroundColor: "#faf9f5",
  },
  buttonText: {
    color: "#a24f23",
    fontSize: 30,
    fontWeight: "bold"
  },
  numberButtonContainer:{
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 20
  }
});

export default OTPScreen;