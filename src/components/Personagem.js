import React, { useState, useEffect } from 'react';

function Personagem() {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    // Faça a solicitação para o servidor intermediário
    fetch('http://localhost:3001/api/character?limit=1500') // Substitua a URL conforme necessário
      .then((response) => response.json())
      .then((data) => setDados(data.characters))
      .catch((error) => console.error('Erro na solicitação:', error));
  }, []);
console.log(dados);
  return (
    <div>
      <img src="./naruto.png" alt="naruto"></img>
      <div className='pai'>
      {dados ? (
        (dados.map((char => (
          <div className='card'>
            <h2 key={char.id}>{char.name}</h2>
            {char.images[0] ? (
              <img src={char.images[0]}/>
            ) : <span><em>Sem imagem...</em>😞</span>}
            
            <h3>Jutsus:</h3>
            {char.jutsu ? (
              <ul>
                {char.jutsu.slice(0, 5).map((jutsu) => (
                  <li key={jutsu}>{jutsu}</li>
                ))}
              </ul>
            ) : <span><em>Nenhum jutsu foi localizado... </em>🙄</span>}
          </div>
      ))))
      ) : <span>Carregando ...</span>}
      
      </div>
    </div>
  );
}

export default Personagem;
