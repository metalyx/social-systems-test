import { iOrder } from '../types/types';

export function isIntervalNeedCleared(order: iOrder): boolean {
  const isPost = order.ordersPost && order.ordersPost.likesTask && order.ordersPost.repostsTask;
  const isFolowers = order.ordersProfile && order.ordersProfile.folowersTask;

  if (isPost) {
    /* eslint-disable max-len */
    const isLikesEnough = order.ordersPost!.likesTask.doneLikes >= order.ordersPost!.likesTask.totalLikes;
    const isRepostsEnough = order.ordersPost!.repostsTask.doneReposts >= order.ordersPost!.repostsTask.totalReposts;
    /* eslint-enable max-len */

    if (isLikesEnough && isRepostsEnough) {
      return true;
    }
    return false;
  }

  if (isFolowers) {
    /* eslint-disable max-len */
    const isFolowersEnough = order.ordersProfile!.folowersTask.doneFolowers >= order.ordersProfile!.folowersTask.totalFolowers;
    /* eslint-enable max-len */

    if (isFolowersEnough) {
      return true;
    }
    return false;
  }

  return false;
}
