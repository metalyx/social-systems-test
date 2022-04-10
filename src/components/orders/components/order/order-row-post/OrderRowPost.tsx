import React from 'react';
import './OrderRowPost.scss';

type OrderRowPostProps = {
  img: string;
  title: string;
  countTotal: number;
  countDone: number;
}

const OrderRowPost: React.FC<OrderRowPostProps> = ({
  img, title, countTotal, countDone,
}) => (
  <div className='order-row-post'>
    <div className='task-logo'>
      <img src={img} alt={title} />
    </div>
    <div className='content'>
      <span className='content__title'>{title}</span>
      <div className='content__counter'>
        <span className='done-vs-total'>
          {`${countDone} / ${countTotal}`}
        </span>
        <input
          className='input-counter-range'
          type='range'
          min={0}
          max={countTotal}
          value={countDone}
          readOnly
        />
      </div>
    </div>
  </div>
);

export default OrderRowPost;
