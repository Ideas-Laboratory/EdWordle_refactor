import * as constants from './actionTypes';
import { fromJS } from 'immutable';
// JS obj 2 immutable obj

const defaultState = fromJS({
    currentNav: 'Home',
    navList: ['Home', 'Create', 'Guide', 'About', 'Links']
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.NAV_CHANGE:
      return state.set('currentNav', action.nextNav);
    default: 
      return state;
  }    
};

export default reducer;

