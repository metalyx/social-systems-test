import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../../../hooks/useTypedSelector';
import { setTotalPrice } from '../../../../../../store/actions/newOrderActionCreators';
import './TotalPrice.scss';

function TotalPrice() {
  const likesTotalPrice = useTypedSelector(state => state.newOrder.likesTotalPrice);
  const folowersTotalPrice = useTypedSelector(state => state.newOrder.folowersTotalPrice);
  const repostsTotalPrice = useTypedSelector(state => state.newOrder.repostsTotalPrice);
  const totalPrice = useTypedSelector(state => state.newOrder.totalPrice);

  const dispatch = useDispatch();

  useEffect(() => {
    let sum = 0;

    if (likesTotalPrice) { sum += likesTotalPrice; }
    if (folowersTotalPrice) { sum += folowersTotalPrice; }
    if (repostsTotalPrice) { sum += repostsTotalPrice; }

    dispatch(setTotalPrice(sum));
  }, [likesTotalPrice, folowersTotalPrice, repostsTotalPrice]);

  return (
    <div className='total-price'>
      <span className='gray'>Итого:</span>
      <span className='default'>
        {`${totalPrice ? totalPrice.toLocaleString() : 0} руб.`}
      </span>
    </div>
  );
}

export default TotalPrice;
