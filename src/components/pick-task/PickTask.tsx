import React from 'react';
import { PickTaskTypes } from '../../types/types';
import PickTaskInput from './components/pick-task-input/PickTaskInput';
import like from '../../assets/like.png';
import repost from '../../assets/repost.png';
import folower from '../../assets/folowers.png';
import './PickTask.scss';

interface PickTaskProps {
  type: PickTaskTypes;
  isVk?: boolean;
  isInstagram?: boolean;
}

const PickTask: React.FC<PickTaskProps> = ({ type, isInstagram, isVk }) => {
  const getImg = () => {
    if (type === 'folowers') {
      return folower;
    }

    if (type === 'likes') {
      return like;
    }

    if (type === 'reposts') {
      return repost;
    }

    return '';
  };

  const getTitle = () => {
    if (type === 'folowers') {
      return 'Подписчики';
    }

    if (type === 'likes') {
      return 'Лайки';
    }

    if (type === 'reposts') {
      return 'Репосты';
    }

    return '';
  };

  return (
    <div className='pick-task'>
      <div className='pick-task__left-column'>
        <div className='img'>
          <img src={getImg() as string} alt={getTitle()} />
        </div>
        <div className='title'>{getTitle()}</div>
      </div>
      <div className='pick-task__right-column'>
        <PickTaskInput type={type} isInstagram={isInstagram} isVk={isVk} />
      </div>
    </div>
  );
};

export default PickTask;
