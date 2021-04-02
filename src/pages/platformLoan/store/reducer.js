import {fromJS} from "immutable";
import {constants} from "./index";

const defaultState = fromJS({
    currentStep: 0
});

const changeStep = (state, action) => {
    return state.merge({
        currentStep: action.currentStep
    })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_STEP:
            return changeStep(state, action)
        default:
            return state;

    }
}