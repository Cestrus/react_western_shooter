import React from 'react';
import { useSelector } from 'react-redux';

import Modal from './components/Modal/Modal';
import GamePlate from './layout/GamePlate/GamePlate';
import Layout from './layout/Layout';
import { RootState } from './store/store';
import { ModalType } from './types/globalTypes';

function App(): JSX.Element {
  const isAuthorized = useSelector((state: RootState) => state.player.isAuthorized);
  const isGameOver = useSelector((state: RootState) => state.player.gameIsOver);

  return (
    <Layout>
      {!isAuthorized && <Modal modalType={ModalType.AUTHORIZATION} />}
      {isGameOver && <Modal modalType={ModalType.GAMEOVER} />}
      <GamePlate />
    </Layout>
  );
}

export default App;
