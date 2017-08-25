import * as Actions from '../constants/ActionTypes';

export default function(state = {}, action) {
    switch (action.type) {
        case Actions.FETCH_COMMENTS_FOR_POST:
          console.log(action);
          if (action.payload.data[0]) {
            return { ...state, [action.payload.data[0].parentId]: action.payload.data };
          } else {
            return state;
          }
        default:
          return state;
    }
}