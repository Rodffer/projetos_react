import React from 'react';

import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { RiArrowRightLine } from 'react-icons/ri';
import Checkbox from '@material-ui/core/Checkbox';
import CustomizedInputs from '../../components/CustomizedInputs';

import logoImg from '../../assets/logo.svg';

import {
  Container,
  Content,
  Background,
  AnimationContainer,
  Footer,
} from './styles';

export default function Login() {
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <header>
            <img src={logoImg} alt="League Of Legends" />
            <nav>
              <BsFillQuestionCircleFill />
            </nav>
          </header>

          <form>
            <h1>Insira sua conta</h1>
            <CustomizedInputs inputType="email" inputName="NOME DE USUÁRIO" />
            <CustomizedInputs inputType="password" inputName="SENHA" />

            <div>
              <Checkbox />
              <h3>Manter login</h3>
            </div>
            <button type="submit">
              <RiArrowRightLine size={35} />
            </button>
          </form>

          <Footer>
            <a href="/main">CRIAR CONTA</a>
            <a href="/main">NÃO CONSEGUE INICIAR SESSÃO?</a>
          </Footer>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
}
