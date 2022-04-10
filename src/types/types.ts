export type OrderType = 'post' | 'profile';

export interface iModal {
  isOpened: boolean;
}

export interface iProfile {
  avatar: string;
  name: string;
  linkTask: string;
}

export interface iLikeTask {
  img: string;
  totalLikes: number;
  doneLikes: number;
  title: string;
  updatedAt: number;
}

export interface iRepostTask {
  img: string;
  totalReposts: number;
  doneReposts: number;
  title: string;
  updatedAt: number;
}

export interface iFolowersTask {
  img: string;
  title: string;
  totalFolowers: number;
  doneFolowers: number;
  updatedAt: number;
}

export interface iOrderPost {
  id: number;
  likesTask: iLikeTask;
  repostsTask: iRepostTask;
}

export interface iOrderProfile {
  id: number;
  folowersTask: iFolowersTask;
}

export interface iOrder {
  id: number;
  profile: iProfile;
  ordersProfile?: iOrderProfile;
  ordersPost?: iOrderPost;
  createdAt: number;
}

export interface iLinkType {
  isVk: boolean;
  isInstagram: boolean;
  isPost: boolean;
  isProfile: boolean;
}

export type PickTaskTypes = 'likes' | 'reposts' | 'folowers';
