import { NewOrderState } from '../store/reducers/newOrderReducer';

export function getOrderType(newOrder: NewOrderState): 'post' | 'profile' | null {
  const noLikes = newOrder.likes === 0 || newOrder.likes === undefined;
  const noReposts = newOrder.reposts === 0 || newOrder.reposts === undefined;
  const noFolowers = newOrder.folowers === 0 || newOrder.folowers === undefined;

  if (noFolowers === false && noLikes) {
    return 'profile';
  }

  if (noFolowers && (noLikes === false || noReposts === false)) {
    return 'post';
  }

  return null;
}
