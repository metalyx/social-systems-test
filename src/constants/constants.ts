import { iOrder } from '../types/types';

export const mockCoefficient = {
  folowerPriceVk: 4,
  repostPriceVk: 2.20,
  likePriceVk: 2,
  folowerPriceInstagram: 5,
  repostPriceInstagram: 1.3,
  likePriceInstagram: 5,
};

export const mockOrders: iOrder = {
  id: 1,
  createdAt: Date.now(),
  profile: {
    avatar: '',
    linkTask: 'https://vk.com/victor',
    name: 'Виктор Иванчук',
  },
  ordersPost:
    {
      id: 1,
      likesTask: {
        doneLikes: 12,
        totalLikes: 100,
        img: '',
        title: 'Лайки',
        updatedAt: Date.now(),
      },
      repostsTask: {
        doneReposts: 32,
        totalReposts: 50,
        img: '',
        title: 'Репосты',
        updatedAt: Date.now(),
      },
    },
};

export const noUserName = 'Неизвестный пользователь ';
