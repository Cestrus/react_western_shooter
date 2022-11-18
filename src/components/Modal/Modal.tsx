import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';
import { IModalProps } from './Modal.prop';
import ModalOverlay from './ModalOverlay/ModalOverlay';

const Backdrop: React.FC = () => <div className={styles.backdrop}></div>;

const portalElement = document.getElementById('overlays')!;

const Modal: React.FC<IModalProps> = ({ modalType }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay modalType={modalType} />, portalElement)}
    </>
  );
};

export default Modal;
