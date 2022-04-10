import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../store/actions/modalActionCreators';
import './Modal.scss';

interface ModalProps {
  children?: React.ReactNode;
  isOpened: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, isOpened }) => {
  const dispatch = useDispatch();

  const closeModalWindow = () => {
    dispatch(closeModal());
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isOpened && (
      /* eslint-disable-next-line
      jsx-a11y/click-events-have-key-events,
      jsx-a11y/no-static-element-interactions */
      <div
        className='modal__wrapper'
        onClick={closeModalWindow}
      >
        {/* eslint-disable-next-line
        jsx-a11y/click-events-have-key-events,
        jsx-a11y/no-static-element-interactions */}
        <div className='modal' onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
      )}
    </>

  );
};

export default Modal;
