import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getOrderType } from '../../../../helpers/getOrderType';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { closeModal } from '../../../../store/actions/modalActionCreators';
import { clearNewOrder } from '../../../../store/actions/newOrderActionCreators';
import { addNewOrderPost, addNewOrderProfile } from '../../../../store/actions/ordersActionCreators';
import { setIsTriedToSend, clearValidation } from '../../../../store/actions/validationLinkActionCreators';
import Button from '../../../buttons/button/Button';
import PickTask from '../../../pick-task/PickTask';
import NewOrderLinkInput from './components/new-order-link-input/NewOrderLinkInput';
import TotalPrice from './components/total-price/TotalPrice';
import './NewOrder.scss';

function NewOrder() {
  const linkType = useTypedSelector(state => state.newOrder.linkType);
  const newOrder = useTypedSelector(state => state.newOrder);
  const { isBlured, isTriedToSend, isValid } = useTypedSelector(state => state.validationLink);

  const [isValidOrder, setIsValidOrder] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearNewOrder());
    dispatch(clearValidation());
  }, []);

  const closeModalWindow = () => {
    dispatch(closeModal());
  };

  const addToOrders = () => {
    dispatch(setIsTriedToSend(true));
    if (getOrderType(newOrder) === 'post') {
      dispatch(addNewOrderPost(newOrder));
      dispatch(closeModal());
    } else if (getOrderType(newOrder) === 'profile') {
      dispatch(addNewOrderProfile(newOrder));
      dispatch(closeModal());
    }
  };

  useEffect(() => {
    if (getOrderType(newOrder) !== null) {
      setIsValidOrder(true);
    } else {
      setIsValidOrder(false);
    }
  }, [newOrder]);

  return (
    <div className='new-order'>
      <div className='new-order__head'>
        {/* eslint-disable-next-line
        jsx-a11y/click-events-have-key-events,
        jsx-a11y/no-static-element-interactions */}
        <span className='close' onClick={closeModalWindow}>&#10005;</span>
        <span className='title'>Оформление заказа</span>
      </div>
      <div className='new-order__main'>
        <span className='main-title'>Укажите ссылку на то, что хотите продвинуть</span>
        <NewOrderLinkInput />
        {((isBlured || isTriedToSend) && !isValid) && (
          <span className='error'>
            Некорректная ссылка
          </span>
        )}
        {linkType && linkType.isPost && (
          <div>
            <PickTask type='likes' isInstagram={linkType.isInstagram} isVk={linkType.isVk} />
            <PickTask type='reposts' isInstagram={linkType.isInstagram} isVk={linkType.isVk} />
          </div>
        )}
        {linkType && linkType.isProfile && (
          <div>
            <PickTask type='folowers' isInstagram={linkType.isInstagram} isVk={linkType.isVk} />
          </div>
        )}
      </div>
      <div className='new-order__footer'>
        <div className='total-price__wrapper'>
          <TotalPrice />
        </div>
        <div className='buttons__wrapper'>
          <Button title='Закрыть' onClick={closeModalWindow} />
          <Button title='Добавить' onClick={addToOrders} disabled={!isValidOrder} />
        </div>
      </div>
    </div>
  );
}

export default NewOrder;
