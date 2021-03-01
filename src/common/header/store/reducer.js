import * as constants from './actionTypes';
import { fromJS } from 'immutable';
// JS obj 2 immutable obj

const defaultState = fromJS({
    currentNav: 'Home',
    pointNav: '',
    navList: ['Home', 'Create', 'Guide', 'About', 'Links']
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.NAV_CHANGE:
      return state.set('currentNav', action.nextNav);
      case constants.MAGNIFY_START:
        return state.set('pointNav', action.item);
      case constants.MAGNIFY_STOP:
        return state.set('pointNav', '');
    default: 
      return state;
  }    
};

export default reducer;

