import * as Actions from '../constants/ActionTypes';
import _ from 'lodash';

export default function(state = {}, action) {
    console.log("from reducer_posts: " + action)
    switch (action.type) {
        case Actions.DELETE_POST:
            return state;
        case Actions.FETCH_POST:
            return state;
        case Actions.FETCH_POSTS:
            return _.mapKeys(action.payload.data, "id");
        default:
            return state;
    }
}