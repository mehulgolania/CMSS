import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import Label from './Label';
import Input from './Input';
import AppButton from './AppButton';

const FormGroup = props => {
  return(
    <View style={{...styles.formGroup, ...props.style}}>
      {props.children}
    </View>
  ) 
}

const RegisterForm = props => {
  return(
    <>
      <FormGroup>
        <Label title="Enter 10 digit Mobile Number" />
        <Input 
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
          maxLength={10}
          keyboardType="number-pad"
        />
      </FormGroup>

      <FormGroup>
        <Label title="Enter Full Name" />
        <Input 
          autoCapitalize="words"
          autoCompleteType="off"
          autoCorrect={false}
        />
      </FormGroup>

      <View style={{flex: 1, flexDirection: "row", justifyContent: "space-between"}}>
        <FormGroup style={{width: "48%"}}>
          <Label title="M-Pin" />
          <Input 
            autoCapitalize="none"
            autoCompleteType="off"
            autoCorrect={false}
            maxLength={6}
            keyboardType="number-pad"
          />
        </FormGroup>

        <FormGroup style={{width: "48%"}}>
          <Label title="Confirm M-Pin" />
          <Input 
            autoCapitalize="none"
            autoCompleteType="off"
            autoCorrect={false}
            maxLength={6}
            keyboardType="number-pad"
          />
        </FormGroup>
      </View>

      <FormGroup>
        <Label title="Customer-id" optional="(optional)" />
        <Input 
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
        />
      </FormGroup>

      <FormGroup style={{marginBottom: 5}}>
        <AppButton 
          title="Register" 
          onPress={() => props.navigation.navigate('OTP')}
        />
      </FormGroup>

      <View styles={styles.linkContainer}>
        <Text style={styles.textStyle}>Already have an account? <Text style={styles.underline}>Login here.</Text></Text> 
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  formGroup: {
    marginBottom: 25
  },
  linkContainer:{
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  textStyle: {
    color: "#cc5a13",
    textAlign: "center"
  },
  underline: {
    textDecorationStyle: "solid",
    textDecorationColor: "#cc5a13",
    textDecorationLine: "underline",
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: "#cc5a13"
  }
});

export default RegisterForm;