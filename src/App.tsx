import React from 'react';
import TodoList from './components/TodoList';

// Componente principal da aplicação.
// Aqui poderíamos definir rotas ou layout principal.
function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Minha Lista de Tarefas 📝</h1>
      <TodoList />
    </div>
  );
}

export default App;
