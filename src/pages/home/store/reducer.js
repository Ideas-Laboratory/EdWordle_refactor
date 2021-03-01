import { fromJS } from 'immutable';
import * as constants from './actionTypes';
// JS obj 2 immutable obj

const defaultState = fromJS({
  title: 'EdWordle',
  description: 'EdWordle is a tool for editing “word clouds” based on the Wordle. The initial word cloud can be generated from the input text or read from an existing one. You can re-font, re-color, resize, move, rotate, add and delete words to create custom visualizations.'
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    default: 
        return state;
  }    
}

export default reducer;