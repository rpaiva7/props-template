
import React from "react";
import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {

  const nome = "Renan"
  const carro1={
    nomeDoCarro: "Volvo XC 70",
    ano: 2022,
    cor: "Azul",
    flex: false
  }

  const carro2={
    nomeDoCarro: "Amarok",
    ano: 2019,
    cor: "Grafite",
    flex: true
  }

  const carro3={
    nomeDoCarro: "Land Rover Discovery",
    ano: 2020,
    cor: "Marrom",
    flex: true
  }

  const carro4={
    nomeDoCarro: "Porsche Cayenne",
    ano: 2021,
    cor: "Cobre",
    flex: false
  }


  const carro5={
    nomeDoCarro: "Fusca",
    ano: 1978,
    cor: "Amarelo",
    flex: false
  }

  const carro6={
    nomeDoCarro: "Brasília",
    ano: 1981,
    cor: "Branca",
    flex: false
  }

  const carro7={
    nomeDoCarro: "Variant",
    ano: 1977,
    cor: "Bege",
    flex: false
  }

  const carro8={
    nomeDoCarro: "Gurgel",
    ano: 1987,
    cor: "Prata",
    flex: false
  }

  function apresentacao(nome){
    alert(`Bem-vindos à garagem do ${nome} `)
  }

  return (
    <div>
      <Garagem
      nome={nome}
      carro1={carro1}
      carro2={carro2}
      carro3={carro3}
      carro4={carro4}
      funcao={apresentacao}
      />
      
      <Garagem
      nome={"Barbosa"}
      carro1={carro5}
      carro2={carro6}
      carro3={carro7}
      carro4={carro8}
      funcao={apresentacao}
      />
        {/* Aqui estou enviando essas informações do App para o componente Garagem */}
      
    </div>
  );
}

/* Dentro do App eu chamei o componente Garagem; dentro de Garagem eu chamei o componente Carro, e dentro de Carro eu descrevi as características deles. */ 

/* Colocamos os valores entre chaves porque as chaves aceitam todos os formatos (string, number, booleano), já as aspas aceitam somente string.
 */
/* Quando eu exporto com o default eu não preciso usar chaves no nome do componente no import */

/* Todo componente é uma grande função */