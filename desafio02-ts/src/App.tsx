import {
  ChakraProvider,
  Input,
  Box,
  Flex,
  Text,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import { login } from './services/login';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { SubmitButton } from './components/SubmitButton/SubmitButton';
import { useState } from 'react';
import { Card } from './components/Card/Card';

function App() {


  return (
    <ChakraProvider>
      <Header />
      <Card />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
