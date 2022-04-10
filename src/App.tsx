import React from 'react';
import { useDispatch } from 'react-redux';
import Button from './components/buttons/button/Button';
import Orders from './components/orders/Orders';
import './App.scss';
import { useTypedSelector } from './hooks/useTypedSelector';
import Modal from './components/modal/Modal';
import { openModal } from './store/actions/modalActionCreators';
import NewOrder from './components/orders/components/new-order/NewOrder';

function App() {
  const isModalOpened = useTypedSelector(state => state.modal.isOpened);
  const dispatch = useDispatch();

  const openModalWindow = () => {
    dispatch(openModal());
  };

  return (
    <div className='App'>
      <Modal isOpened={isModalOpened}>
        <NewOrder />
      </Modal>

      <div className='App__content'>
        <div className='head'>
          <Button title='ДОБАВИТЬ ЗАКАЗ' onClick={openModalWindow} />
        </div>

        <div className='orders'>
          <Orders />
        </div>
      </div>

    </div>
  );
}

export default App;
