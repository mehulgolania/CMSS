import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import RegisterScreen from '../screens/Register/RegisterScreen';
import OTPScreen from '../screens/Register/OTPScreen';
import RegistrationCompleted from '../screens/Register/RegistrationCompleted';

import Icon from 'react-native-vector-icons/FontAwesome';
const MyIcon = props => <Icon name={props.iconName} size={30} color="#868686" style={props.style} {...props} />

const AppStackNavigator = createStackNavigator({
  Register: { screen: RegisterScreen },
  OTP: { screen: OTPScreen },
  RegisterCompleted: {screen: RegistrationCompleted},
},
{
  defaultNavigationOptions: ({navigation}) => {
    return {
      headerLeft: () => {return <MyIcon iconName="bars" style={{marginLeft: 15}} />},
      headerRight: () => {return <MyIcon iconName="user" style={{marginRight: 15}} />},

      headerStyle: {
        backgroundColor: '#efefef',
        borderBottomWidth: 8,
        borderBottomColor: "#c2b8af",
        paddingVertical: 10
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
});

export default AppContainer = createAppContainer(AppStackNavigator);