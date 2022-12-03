import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Modal from './components/Modal/Modal';
import GamePlate from './layout/GamePlate/GamePlate';
import Layout from './layout/Layout';
import { RootState } from './store/store';
import { setTargetPlate } from './store/targetsSlice';
import { ModalType } from './types/globalTypes';
import { GAME_SPEED } from './utils/constants';

function App(): JSX.Element {
  const isAuthorized = useSelector((state: RootState) => state.player.isAuthorized);
  const isGameOver = useSelector((state: RootState) => state.player.gameIsOver);
  const isPaused = useSelector((state: RootState) => state.player.isPaused);

  const dispatch = useDispatch();

  const [timerId, setTimerId] = useState<NodeJS.Timer>();

  useEffect(() => {
    const startTimer = (): void => {
      const id = setInterval(() => {
        dispatch(setTargetPlate());
      }, GAME_SPEED);
      setTimerId(id);
    };

    if (!isPaused && !isGameOver) {
      startTimer();
    } else if (isPaused || isGameOver) {
      clearInterval(timerId);
    }
  }, [isGameOver, isPaused]);

  return (
    <Layout>
      <AnimatePresence>{!isAuthorized && <Modal modalType={ModalType.AUTHORIZATION} />}</AnimatePresence>
      <AnimatePresence>{isGameOver && <Modal modalType={ModalType.GAMEOVER} />}</AnimatePresence>
      <GamePlate />
    </Layout>
  );
}

export default App;
