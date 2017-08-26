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
        case Actions.UP_VOTE_POST:
            //let updatedPost = state[action.payload.data.id];
            //updatedPost.voteScore += 1;
            return { ...state, [action.payload.data.id]: action.payload.data };
        case Actions.DOWN_VOTE_POST:
            return { ...state, [action.payload.data.id]: action.payload.data }
        default:
            return state;
    }
}