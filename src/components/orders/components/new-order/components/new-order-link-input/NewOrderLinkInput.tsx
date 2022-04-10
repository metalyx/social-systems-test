import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getLinkType } from '../../../../../../helpers/getLinkType';
import { useTypedSelector } from '../../../../../../hooks/useTypedSelector';
import { setLink, setLinkType } from '../../../../../../store/actions/newOrderActionCreators';
import instagram from '../../../../../../assets/instagram.svg';
import vk from '../../../../../../assets/vk.svg';

import './NewOrderLinkInput.scss';
import { setBlured, setIsValid } from '../../../../../../store/actions/validationLinkActionCreators';

const NewOrderLinkInput: React.FC = () => {
  const dispatch = useDispatch();
  const link = useTypedSelector(state => state.newOrder.taskLink);
  const linkType = useTypedSelector(state => state.newOrder.linkType);
  const { isBlured, isTriedToSend, isValid } = useTypedSelector(state => state.validationLink);

  const [className, setClassName] = useState<string[]>([]);
  const [isWithBorder, setIsWithBorder] = useState(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLinkType(getLinkType(e.target.value)));
    dispatch(setLink(e.target.value));
  };

  const getSvg = (): any => {
    if (linkType?.isInstagram) {
      return instagram;
    }

    if (linkType?.isVk) {
      return vk;
    }

    return '';
  };

  const onBlurHandle = () => {
    dispatch(setBlured(true));
  };

  useEffect(() => {
    const isSocialNetworkOccures = linkType?.isInstagram || linkType?.isVk;
    const isPostOrProfileOccures = linkType?.isPost || linkType?.isProfile;

    if (isSocialNetworkOccures && isPostOrProfileOccures) {
      dispatch(setIsValid(true));
      setIsWithBorder(true);
    } else {
      dispatch(setIsValid(false));
      setIsWithBorder(false);
    }
  }, [linkType]);

  useEffect(() => {
    const isInvalid = ((isBlured || isTriedToSend) && !isValid);
    const filtered = className.filter(cn => (cn !== 'with-logo' && cn !== 'onerror'));

    if (getSvg() !== '' && isInvalid) {
      setClassName([...filtered, 'with-logo', 'onerror']);
    } else if (getSvg() !== '' && !isInvalid) {
      setClassName([...filtered, 'with-logo']);
    } else if (getSvg() === '' && isInvalid) {
      setClassName([...filtered, 'onerror']);
    } else {
      setClassName(filtered);
    }
  }, [link, isBlured, isTriedToSend, isValid]);

  return (
    <div className={isWithBorder ? 'new-order-link-input with-border' : 'new-order-link-input'}>
      {getSvg() !== '' && (
        <img src={getSvg()} alt='' />
      )}
      <input
        type='text'
        value={link ?? ''}
        onChange={(e) => onChangeHandler(e)}
        placeholder='Введите ссылку'
        className={className.join(' ')}
        onBlur={onBlurHandle}
      />
    </div>
  );
};

export default NewOrderLinkInput;
