import React, { useState } from 'react';
import ImageCard from "./components/ImageCard";

interface Imagem {
  id: number;
  src: string;
  legenda: string;
}

function App() {
  const [imagens, setImagens] = useState<Imagem[]>([]);
  const [urlInput, setUrlInput] = useState('');
  const [legendaInput, setLegendaInput] = useState('');

  const adicionarImagem = () => {
    if (urlInput.trim() && legendaInput.trim()) {
      const novaImagem: Imagem = {
        id: Date.now(),
        src: urlInput.trim(),
        legenda: legendaInput.trim()
      };
      setImagens([...imagens, novaImagem]);
      setUrlInput('');
      setLegendaInput('');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Galeria de Imagens</h1>
      
      <div style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>Adicionar Nova Imagem</h2>
        <div style={{ marginBottom: '1rem' }}>
          <input
            type="text"
            placeholder="URL da imagem"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <input
            type="text"
            placeholder="Legenda da imagem"
            value={legendaInput}
            onChange={(e) => setLegendaInput(e.target.value)}
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <button
          onClick={adicionarImagem}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Adicionar Imagem
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
        {imagens.map((imagem) => (
          <ImageCard
            key={imagem.id}
            src={imagem.src}
            legenda={imagem.legenda}
          />
        ))}
      </div>

      {imagens.length === 0 && (
        <p style={{ textAlign: 'center', color: '#666', marginTop: '2rem' }}>
          Nenhuma imagem adicionada ainda. Use o formulário acima para adicionar imagens!
        </p>
      )}
    </div>
  );
}

export default App;