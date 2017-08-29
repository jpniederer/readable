import * as Actions from '../constants/ActionTypes';
import * as _ from 'lodash';

export default function (state = {}, action) {
    switch (action.type) {
        case Actions.FETCH_COMMENTS_FOR_POST:
            return _.mapKeys(_.filter(action.payload.data, function (p) { return !p.deleted }), "id");
        case Actions.VOTE_ON_COMMENT:
            return { ...state, [action.payload.data.id]: action.payload.data }
        default:
            return state;
    }
}