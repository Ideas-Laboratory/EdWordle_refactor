import * as constants from './actionTypes';

export const navChangeAction = (nextNav) => ({
  type: constants.NAV_CHANGE,
  nextNav
});

export const magnifyAction = (item) => ({
  type: constants.MAGNIFY_START,
  item
});

export const nonMagnifyAction = () => ({
  type: constants.MAGNIFY_STOP
});