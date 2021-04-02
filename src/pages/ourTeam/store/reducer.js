import {fromJS} from "immutable";


const defaultState = fromJS({});


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}