import * as Actions from '../constants/ActionTypes';

export default function(state = [], action) {
    console.log("from reducer_categories: " + action);
    switch (action.type) {
        case Actions.FETCH_CATEGORIES:
            return action.payload.data;
        default:
            return state;
    }
}