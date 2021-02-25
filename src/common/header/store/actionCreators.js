import * as constants from './actionTypes';

export const navChangeAction = (nextNav) => ({
  type: constants.NAV_CHANGE,
  nextNav
});