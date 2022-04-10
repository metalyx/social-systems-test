import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { iOrder } from '../../../../types/types';
import OrderRowPost from './order-row-post/OrderRowPost';
import OrderRowProfile from './order-row-profile/OrderRowProfile';
import like from '../../../../assets/like.png';
import repost from '../../../../assets/repost.png';
import folower from '../../../../assets/folowers.png';
import nouser from '../../../../assets/nouser.png';
import './Order.scss';
import { addCounts } from '../../../../store/actions/ordersActionCreators';
import { isIntervalNeedCleared } from '../../../../helpers/isIntervalNeedCleared';

interface OrderProps {
  order: iOrder;
}

const Order: React.FC<OrderProps> = ({ order }) => {
  const dispatch = useDispatch();
  const intervalRef = useRef<any>();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      dispatch(addCounts(order));
    }, 60000);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (isIntervalNeedCleared(order)) {
      clearInterval(intervalRef.current);
    }
  }, [order]);

  return (
    <div className='order__wrapper'>
      {order && (
      <OrderRowProfile
        avatar={order.profile.avatar === '' ? nouser : order.profile.avatar}
        linkTask={order.profile.linkTask}
        name={order.profile.name}
      />
      )}
      {order && order.ordersPost && (
        <React.Fragment key={order.ordersPost.id}>
          <OrderRowPost
            img={like}
            title={order.ordersPost.likesTask.title ?? 'Лайки'}
            countTotal={order.ordersPost.likesTask.totalLikes}
            countDone={order.ordersPost.likesTask.doneLikes}
          />
          <OrderRowPost
            img={repost}
            title={order.ordersPost.repostsTask.title ?? 'Репосты'}
            countTotal={order.ordersPost.repostsTask.totalReposts}
            countDone={order.ordersPost.repostsTask.doneReposts}
          />
        </React.Fragment>
      )}
      {order && order.ordersProfile && (
      <OrderRowPost
        img={folower}
        title={order.ordersProfile.folowersTask.title ?? 'Подписчики'}
        countDone={order.ordersProfile.folowersTask.doneFolowers}
        countTotal={order.ordersProfile.folowersTask.totalFolowers}
      />
      )}
    </div>
  );
};

export default React.memo(Order);
