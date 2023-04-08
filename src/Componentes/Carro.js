import React from "react";

function Carro(props) {
  return (
    <div>
      <h2>Nome: {props.carro.nomeDoCarro}</h2>
      <ul>
        <li>Cor: {props.carro.cor}</li>
        <li>Ano: {props.carro.ano}</li>
        <li>Flex?: {props.carro.flex?"Sim":"Não"}</li>
      </ul>

    </div>
  );
}

export default Carro; /* Quando eu exporto com o default eu não preciso usar chaves no nome do componente no import */
