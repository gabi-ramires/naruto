import express from 'express';

<<<<<<< HEAD
// Resto do seu código



=======
>>>>>>> 4e3dcd6 (atualizando td)
import fetch from 'node-fetch';

// Resto do seu código

const app = express();
const port = 3001; // Escolha a porta que desejar

// Middleware para permitir solicitações CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Rota para fazer a solicitação ao servidor de destino e passar a resposta de volta
app.get('/api/character', async (req, res) => {
  try {
    const response = await fetch(`https://narutodb.xyz/api/character?limit=1500`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Erro na solicitação:', error);
    res.status(500).json({ error: 'Erro na solicitação' });
  }
});

app.listen(port, () => {
  console.log(`Servidor intermediário rodando na porta ${port}`);
});
