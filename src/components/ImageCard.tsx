import React from 'react';

// Definimos o tipo das props do ImageCard usando TypeScript
type ImageCardProps = {
  src: string;
  legenda: string;
};

function ImageCard({ src, legenda }: ImageCardProps) {
  return (
    <div style={{ 
      border: '1px solid #ddd', 
      borderRadius: '8px', 
      padding: '1rem', 
      margin: '1rem 0',
      textAlign: 'center',
      backgroundColor: '#f9f9f9'
    }}>
      <img 
        src={src} 
        alt={legenda}
        style={{ 
          maxWidth: '100%', 
          height: 'auto', 
          borderRadius: '4px',
          marginBottom: '0.5rem'
        }}
      />
      <p style={{ 
        margin: '0', 
        fontSize: '14px', 
        color: '#666',
        fontWeight: 'bold'
      }}>
        {legenda}
      </p>
    </div>
  );
}

export default ImageCard;