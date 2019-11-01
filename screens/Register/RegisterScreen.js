import React from 'react';
import Screen from '../../components/Screen';
import HeaderTitle from '../../components/HeaderTitle';
import ContentContainer from '../../components/ContentContainer';
import RegisterForm from '../../components/RegisterForm';

const RegisterScreen = props => {
  return (
    <Screen>
      <HeaderTitle title="Registration" />
      <ContentContainer>
        <RegisterForm navigation={props.navigation} />
      </ContentContainer>
    </Screen>
  );
}

export default RegisterScreen;