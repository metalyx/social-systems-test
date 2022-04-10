import { iOrder } from '../../types/types';
import { NewOrderState } from '../reducers/newOrderReducer';
import { OrdersActions, OrdersActionTypes } from '../reducers/ordersReducer';
import { noUserName } from '../../constants/constants';

export function addNewOrderProfile(payload: NewOrderState): OrdersActions {
  const newOrder: iOrder = {
    profile: {
      avatar: '',
      linkTask: payload.taskLink!,
      name: noUserName,
    },
    ordersProfile: {
      id: 1,
      folowersTask: {
        img: '',
        title: 'Подписчики',
        doneFolowers: 0,
        totalFolowers: payload.folowers!,
        updatedAt: Date.now(),
      },
    },
    createdAt: Date.now(),
  } as iOrder;

  return {
    type: OrdersActionTypes.ADD_ORDER,
    payload: newOrder,
  };
}

export function addNewOrderPost(payload: NewOrderState): OrdersActions {
  const newOrder: iOrder = {
    profile: {
      avatar: '',
      linkTask: payload.taskLink!,
      name: noUserName,
    },
    ordersPost:
      {
        id: 1,
        likesTask: {
          doneLikes: 0,
          img: '',
          title: 'Лайки',
          totalLikes: payload.likes!,
          updatedAt: Date.now(),
        },
        repostsTask: {
          doneReposts: 0,
          img: '',
          title: 'Репосты',
          totalReposts: payload.reposts!,
          updatedAt: Date.now(),
        },
      },
    createdAt: Date.now(),
  } as iOrder;

  return {
    type: OrdersActionTypes.ADD_ORDER,
    payload: newOrder,
  };
}

export function addCounts(order: iOrder): OrdersActions {
  const copy = { ...order };
  const isPost = copy.ordersPost && copy.ordersPost.likesTask && copy.ordersPost.repostsTask;
  const isFolowers = copy.ordersProfile && copy.ordersProfile.folowersTask;

  if (isPost) {
    if (copy.ordersPost!.likesTask.doneLikes < copy.ordersPost!.likesTask.totalLikes) {
      copy.ordersPost!.likesTask!.doneLikes += 1;
    }

    if (copy.ordersPost!.repostsTask!.doneReposts < copy.ordersPost!.repostsTask!.totalReposts) {
      copy.ordersPost!.repostsTask!.doneReposts += 1;
    }

    return {
      type: OrdersActionTypes.ADD_COUNTS,
      payload: copy,
    };
  }

  if (isFolowers) {
    if (
      copy.ordersProfile!.folowersTask.doneFolowers < copy.ordersProfile!.folowersTask.totalFolowers
    ) {
      copy.ordersProfile!.folowersTask.doneFolowers += 1;
    }
    return {
      type: OrdersActionTypes.ADD_COUNTS,
      payload: copy,
    };
  }

  return {
    type: OrdersActionTypes.ADD_COUNTS,
    payload: order,
  };
}
