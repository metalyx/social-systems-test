import { iLinkType } from '../types/types';

function haveSlash(str: string): boolean {
  return str.includes('/');
}

function haveAudio(str: string): boolean {
  return str.includes('audio');
}

function havePhoto(str: string): boolean {
  return str.includes('photo');
}

function haveQuestionSign(str: string): boolean {
  return str.includes('?');
}

function isHaveRestrictedWordsVK(str: string): boolean {
  if (haveSlash(str) || haveAudio(str) || havePhoto(str) || haveQuestionSign(str)) {
    return true;
  }

  return false;
}

function haveDirectInbox(str: string): boolean {
  if (str.includes('direct/inbox')) {
    return true;
  }

  return false;
}

function haveExplore(str: string): boolean {
  if (str.includes('explore/')) {
    return true;
  }

  return false;
}

function isHaveRestrictedWordsInstagram(str: string): boolean {
  if (haveDirectInbox(str) || haveExplore(str)) {
    return true;
  }

  return false;
}

export function getLinkType(link: string): iLinkType {
  const linkType: iLinkType = {
    isVk: false,
    isInstagram: false,
    isPost: false,
    isProfile: false,
  };

  if (link.includes('vk.com') && !link.includes('instagram.com')) {
    linkType.isVk = true;
    linkType.isInstagram = false;
  } else if (!link.includes('vk.com') && link.includes('instagram.com')) {
    linkType.isVk = false;
    linkType.isInstagram = true;
  } else {
    linkType.isVk = false;
    linkType.isInstagram = false;
  }

  if (linkType.isVk === false && linkType.isInstagram === false) {
    linkType.isInstagram = false;
    linkType.isVk = false;
    linkType.isProfile = false;
    linkType.isPost = false;
    return linkType;
  }

  if (linkType.isInstagram) {
    const indexOfProfile = link.indexOf('/p/');
    if (link.includes('/p/') && link.slice(indexOfProfile + 3) !== '') {
      linkType.isPost = true;
      return linkType;
    }

    const indexOfInstagram = link.indexOf('instagram.com/');
    if (indexOfInstagram >= 0) {
      const slice = link.slice(indexOfInstagram + 14);
      if (slice === '') {
        linkType.isInstagram = true;
        linkType.isVk = false;
        linkType.isProfile = false;
        linkType.isPost = false;

        return linkType;
      }

      if (isHaveRestrictedWordsInstagram(slice)) {
        linkType.isInstagram = true;
        linkType.isVk = false;
        linkType.isProfile = false;
        linkType.isPost = false;

        return linkType;
      }

      linkType.isProfile = true;
      return linkType;
    }
  }

  if (linkType.isVk) {
    if (link.includes('wall-')) {
      linkType.isInstagram = false;
      linkType.isVk = true;
      linkType.isProfile = false;
      linkType.isPost = true;

      return linkType;
    }

    const indexOfProfile = link.indexOf('vk.com/');
    const strAfterSlash = link.slice(indexOfProfile + 7);
    if (indexOfProfile >= 0 && strAfterSlash !== '') {
      if (isHaveRestrictedWordsVK(strAfterSlash)) {
        linkType.isInstagram = false;
        linkType.isVk = true;
        linkType.isProfile = false;
        linkType.isPost = false;

        return linkType;
      }

      linkType.isInstagram = false;
      linkType.isVk = true;
      linkType.isProfile = true;
      linkType.isPost = false;
      return linkType;
    }

    linkType.isInstagram = false;
    linkType.isVk = true;
    linkType.isProfile = false;
    linkType.isPost = false;

    return linkType;
  }

  return linkType;
}
