
import React from "react";
import Carro from "./Carro";

function Garagem(props) {
  console.log(props)
  
  return (
    <div>
      <h1>Garagem do {props.nome}</h1>
      <button onClick={()=>props.funcao(props.nome)}>CLIQUE EM MIM</button>
      <Carro carro={props.carro1}/>
      <Carro carro={props.carro2}/>
      <Carro carro={props.carro3}/>
      <Carro carro={props.carro4}/>
        {/* Aqui eu defini um novo nome para o carro e estou enviando essas informações do atual componente filho (Garagem) para o componente Carro (neto), pois não irei utilizá-lo neste componente */}
       
    </div>
  );
}

export default Garagem; /* Quando eu exporto com o default eu não preciso usar chaves no nome do componente no import */
