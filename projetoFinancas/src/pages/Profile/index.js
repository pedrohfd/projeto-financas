import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import { AuthContext } from '../../contexts/auth';

import {
  Container, Nome, NewLink, NewText, Logout, LogoutText,
} from './styles';

const Profile = () => {
  const { user, signOut } = useContext(AuthContext);
  const navigation = useNavigation();
  return (
    <Container>
      <Header />
      <Nome>{ user && user.nome }</Nome>
      <NewLink onPress={() => navigation.navigate('Registrar')}>
        <NewText>Registrar Gastos</NewText>
      </NewLink>
      <Logout onPress={() => signOut()}>
        <LogoutText>Sair</LogoutText>
      </Logout>
    </Container>
  );
};

export default Profile;
