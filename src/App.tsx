import React from 'react';
import GamePlate from './layout/GamePlate/GamePlate';
import Layout from './layout/Layout';

function App(): JSX.Element {
  return (
    <Layout>
      <GamePlate />
    </Layout>
  );
}

export default App;
