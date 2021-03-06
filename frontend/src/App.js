import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './global.css'

import Routes from './routes';

// JSX

function App() {

  return (
    <>
    <Routes />
    <ToastContainer autoClose={8000} closeOnClick={false} />
    </>
  );
}

export default App;

// ESTADO: trata-se de uma informação a ser mantida pelo componente. Toda vez que o estado é alterado, o componente faz a renderização novamente exibindo as novas informações em tela.

// PROPRIEDADES: São atributos repassados de um componente pai para o filho

// IMUTABILIDADE: Segundo este conceito, não podemos manipular o valor de um estado de uma forma direta. Podemos apenas sobrepor o valor da variável do estado

