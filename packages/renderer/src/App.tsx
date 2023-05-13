import React from 'react';
import GlobalStyles from './styles/globalStyles';
import Button from './components/Button';

const App: React.FC = () => {
  GlobalStyles();
  return (
    <div
      style={{ background: 'blue', display: 'flex', justifyContent: 'center' }}
    >
      <Button />
    </div>
  );
};

export default App;
