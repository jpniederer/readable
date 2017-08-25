import * as Actions from '../constants/ActionTypes';
import _ from 'lodash';

export default function (state = {}, action) {
    switch (action.type) {
        case Actions.DELETE_POST:
            return _.omit(state, action.payload);
        case Actions.FETCH_POST:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case Actions.FETCH_POSTS:
            return _.mapKeys(_.filter(action.payload.data, function (p) { return !p.deleted }), "id");
        case Actions.VOTE_ON_POST:
            console.log('Voted on post: ' + action.payload.data);
            return { ...state, [action.payload.data.id]: action.payload.data };
        default:
            return state;
    }
}