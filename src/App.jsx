import { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import {
  SectionConteiner,
  SectionConteiner2,
  ButtonConteiner,
  DivConteiner,
  InputConteiner,
} from "./components/style";

function App() {
  const [primeiroNumero, setPrimeiroNumero] = useState();
  const [segundoNumero, setSegundoNumero] = useState();
  const [resultado, setResultado] = useState();

  const Capturarn1 = (item) => {
    setPrimeiroNumero(Number(item.target.value));
  };

  const Capturarn2 = (item) => {
    setSegundoNumero(Number(item.target.value));
  };

  const Soma = () => {
    setResultado(primeiroNumero + segundoNumero);
  };

  const Subtrair = () => {
    setResultado(primeiroNumero - segundoNumero);
  };

  const Divisao = () => {
    setResultado(primeiroNumero / segundoNumero);
  };

  const Multiplicacao = () => {
    setResultado(primeiroNumero * segundoNumero);
  };

  return (
    <DivConteiner>
      <SectionConteiner>
        <h1>Calculadora</h1>

        <InputConteiner
          type="number"
          placeholder="Digite um Numero!"
          onChange={Capturarn1}
        />
        <InputConteiner
          type="number"
          placeholder="Digite outro Numero!"
          onChange={Capturarn2}
        />
        <h2> {resultado}</h2>
      </SectionConteiner>
      <SectionConteiner2>
        <ButtonConteiner onClick={Soma}>+</ButtonConteiner>
        <ButtonConteiner onClick={Subtrair}>-</ButtonConteiner>
        <ButtonConteiner onClick={Divisao}>/</ButtonConteiner>
        <ButtonConteiner onClick={Multiplicacao}>*</ButtonConteiner>
      </SectionConteiner2>
    </DivConteiner>
  );
}

export default App;
