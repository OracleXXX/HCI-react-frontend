import {fromJS} from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
    test: []


});
const changeTestList = (state, action) => {
    return state.merge({
        test: action.list
    })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.TEST:

            return changeTestList(state, action);

        default:
            return state;
    }
}