import * as Actions from '../constants/ActionTypes';
import _ from 'lodash';

export default function(state = {}, action) {
    switch (action.type) {
        case Actions.DELETE_POST:
            return _.omit(state, action.payload);
        case Actions.FETCH_POST:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case Actions.FETCH_POSTS:
            return _.mapKeys(action.payload.data, "id");
        default:
            return state;
    }
}