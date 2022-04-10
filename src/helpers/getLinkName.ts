import { iLinkType } from '../types/types';

export function getLinkName(linkType: iLinkType): string {
  if (linkType.isInstagram && linkType.isPost) {
    return 'Пост Инстаграм';
  }

  if (linkType.isInstagram && linkType.isProfile) {
    return 'Аккаунт Инстаграм';
  }

  if (linkType.isVk && linkType.isProfile) {
    return 'Аккаунт VK';
  }

  if (linkType.isVk && linkType.isPost) {
    return 'Пост VK';
  }

  if (linkType.isVk) {
    return 'VK';
  }

  if (linkType.isInstagram) {
    return 'Инстаграм';
  }

  return 'Ссылка на задание';
}
