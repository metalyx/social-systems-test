import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { mockCoefficient } from '../../../../constants/constants';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import {
  setFolowers,
  setFolowersTotalPrice,
  setLikes,
  setLikesTotalPrice,
  setReposts,
  setRepostsTotalPrice,
  unsetAllPrices,
} from '../../../../store/actions/newOrderActionCreators';
import { PickTaskTypes } from '../../../../types/types';
import './PickTaskInput.scss';

interface PickTaskInputProps {
  type: PickTaskTypes;
  isVk?: boolean;
  isInstagram?: boolean;
}

const PickTaskInput: React.FC<PickTaskInputProps> = ({ type, isInstagram, isVk }) => {
  const likes = useTypedSelector(state => state.newOrder.likes);
  const folowers = useTypedSelector(state => state.newOrder.folowers);
  const reposts = useTypedSelector(state => state.newOrder.reposts);

  const likesTotalPrice = useTypedSelector(state => state.newOrder.likesTotalPrice);
  const folowersTotalPrice = useTypedSelector(state => state.newOrder.folowersTotalPrice);
  const repostsTotalPrice = useTypedSelector(state => state.newOrder.repostsTotalPrice);

  const dispatch = useDispatch();

  const onChangeFolowers = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFolowers(Number(e.target.value)));
  };

  const onChangeLikes = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLikes(Number(e.target.value)));
  };

  const onChangeReposts = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setReposts(Number(e.target.value)));
  };

  useEffect(() => {
    dispatch(unsetAllPrices());
  }, [type, isInstagram, isVk]);

  useEffect(() => {
    if (isInstagram) {
      if (type === 'folowers') {
        dispatch(
          setFolowersTotalPrice(folowers ? folowers * mockCoefficient.folowerPriceInstagram : 0),
        );
      }

      if (type === 'likes') {
        dispatch(setLikesTotalPrice(likes ? likes * mockCoefficient.likePriceInstagram : 0));
      }

      if (type === 'reposts') {
        dispatch(
          setRepostsTotalPrice(reposts ? reposts * mockCoefficient.repostPriceInstagram : 0),
        );
      }
    }

    if (isVk) {
      if (type === 'folowers') {
        dispatch(setFolowersTotalPrice(folowers ? folowers * mockCoefficient.folowerPriceVk : 0));
      }

      if (type === 'likes') {
        dispatch(setLikesTotalPrice(likes ? likes * mockCoefficient.likePriceVk : 0));
      }

      if (type === 'reposts') {
        dispatch(setRepostsTotalPrice(reposts ? reposts * mockCoefficient.repostPriceVk : 0));
      }
    }
  }, [folowers, likes, reposts, type, isInstagram, isVk]);

  return (
    <div className='pick-task-input'>
      {type === 'folowers' && (
        <>
          <span className='price'>
            {folowersTotalPrice ? folowersTotalPrice.toLocaleString() : 0}
            {' '}
            &#8381;
          </span>
          <input
            type='number'
            id='folowers'
            value={folowers ?? 0}
            onChange={onChangeFolowers}
            min={0}
          />
        </>
      )}
      {type === 'likes' && (
        <>
          <span className='price'>
            {likesTotalPrice ? likesTotalPrice.toLocaleString() : 0}
            {' '}
            &#8381;
          </span>
          <input
            type='number'
            id='likes'
            value={likes ?? 0}
            onChange={onChangeLikes}
            min={0}
          />
        </>
      )}
      {type === 'reposts' && (
        <>
          <span className='price'>
            {repostsTotalPrice ? repostsTotalPrice.toLocaleString() : 0}
            {' '}
            &#8381;
          </span>
          <input
            type='number'
            id='reposts'
            value={reposts ?? 0}
            onChange={onChangeReposts}
            min={0}
          />
        </>
      )}
    </div>
  );
};

export default PickTaskInput;
