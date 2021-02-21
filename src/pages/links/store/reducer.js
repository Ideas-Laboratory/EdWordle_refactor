import { fromJS } from 'immutable';
import * as constants from './actionTypes';
// JS obj 2 immutable obj

const defaultState = fromJS({

});


const reducer = (state = defaultState, action) => {
  switch (action.type) {
    
    default: 
        return state;
  }    
}

export default reducer;