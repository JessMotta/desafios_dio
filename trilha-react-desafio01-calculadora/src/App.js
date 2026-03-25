import Input from "./components/Input";
import Button from "./components/Button";

import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  // verifica se alguma operação foi realizada anteriormente
  const [operationDone, setOperationDone] = useState(false);

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
    setOperationDone(false);
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
  };

  //  SOMA
  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
    }
    // caso alguma operação tenha sido realizada anteriormente
    else if (operationDone === true) {
      setCurrentNumber("0");
      setOperation("+");
      setOperationDone(false);
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber(String(sum));
      setOperation("");
      setOperationDone(true);
    }
  };

  // SUBTRAÇÃO
  const handleMinusNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
      console.log("------------ first ===  0");
      console.log("firstNumber", firstNumber);
      console.log("currentNumber", currentNumber);
    } else if (operationDone === true) {
      setCurrentNumber("0");
      setOperation("-");
      setOperationDone(false);
      console.log("------------ operationDone === true");
      console.log("firstNumber", firstNumber);
    } else {
      const min = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(min));
      setFirstNumber(String(min));
      setOperation("");
      setOperationDone(true);
    }
  };

  // MULTIPLICAÇÃO
  const handleMultplyNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("*");
    } else if (operationDone === true) {
      setCurrentNumber("0");
      setOperation("*");
      setOperationDone(false);
    } else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setFirstNumber(String(mult));
      setOperation("");
      setOperationDone(true);
    }
  };

  // DIVISÃO
  const handleDivNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    } else if (operationDone === true) {
      setCurrentNumber("0");
      setOperation("/");
      setOperationDone(false);
    } else {
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div));
      setFirstNumber(String(div));
      setOperation("");
      setOperationDone(true);
    }
  };

  // ADICIONA O PONTO DE FLOAT
  const handleAddPoint = () => {
    setCurrentNumber(String(currentNumber + "."));
  };

  // RESULTADO
  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleMinusNumbers();
          break;
        case "*":
          handleMultplyNumbers();
          break;
        case "/":
          handleDivNumbers();
          break;
        default:
          break;
      }
    }
  };

  return (
    <>
      <h1>Calculadora DIO</h1>
      <Container>
        <Content>
          <Input value={currentNumber} />
          <Row>
            <Button label="x" onClick={handleMultplyNumbers} />
            <Button label="/" onClick={handleDivNumbers} />
            <Button label="c" onClick={handleOnClear} />
            <Button label="." onClick={handleAddPoint} />
          </Row>
          <Row>
            <Button label="7" onClick={() => handleAddNumber("7")} />
            <Button label="8" onClick={() => handleAddNumber("8")} />
            <Button label="9" onClick={() => handleAddNumber("9")} />
            <Button label="-" onClick={handleMinusNumbers} />
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber("4")} />
            <Button label="5" onClick={() => handleAddNumber("5")} />
            <Button label="6" onClick={() => handleAddNumber("6")} />
            <Button label="+" onClick={handleSumNumbers} />
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNumber("1")} />
            <Button label="2" onClick={() => handleAddNumber("2")} />
            <Button label="3" onClick={() => handleAddNumber("3")} />
            <Button label="=" onClick={handleEquals} />
          </Row>
        </Content>
      </Container>
    </>
  );
};

export default App;
