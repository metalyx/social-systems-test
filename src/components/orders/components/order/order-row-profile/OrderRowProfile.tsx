import React from 'react';
import { getLinkName } from '../../../../../helpers/getLinkName';
import { getLinkType } from '../../../../../helpers/getLinkType';
import { iOrder } from '../../../../../types/types';
import './OrderRowProfile.scss';

const OrderRowProfile: React.FC<iOrder['profile']> = ({ avatar, linkTask, name }) => {
  const linkType = getLinkType(linkTask);
  const linkName = getLinkName(linkType);

  const checkLinkTaskForHTTP = (): string => {
    if (linkTask.startsWith('http://') || linkTask.startsWith('https://')) {
      return linkTask;
    }
    return `https://${linkTask}`;
  };

  return (
    <div className='order-row-profile'>
      <div className='avatar'>
        <img src={avatar} alt='avatar' />
      </div>
      <div className='content'>
        <span className='content__name'>{name}</span>
        <span className='content__link'>
          <a href={checkLinkTaskForHTTP()}>{linkName}</a>
        </span>
      </div>
    </div>
  );
};

export default OrderRowProfile;
