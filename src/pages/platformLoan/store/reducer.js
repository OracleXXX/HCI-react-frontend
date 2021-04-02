import {fromJS} from "immutable";
import {constants} from "./index";

const defaultState = fromJS({
    currentStep: 0,
    steps: [],
    name: '',
    description: '',
});

const changeStep = (state, action) => {
    return state.merge({
        currentStep: action.currentStep
    })
}
const getSteps = (state, action) => {
    return state.merge({
        steps: fromJS(action.steps)
    })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_STEP:
            return changeStep(state, action)
        case constants.GET_STEPS:
            return getSteps(state, action)
        default:
            return state;

    }
}