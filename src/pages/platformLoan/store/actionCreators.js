import {constants} from "./index";


const changeStep = (index) => ({
    type: constants.CHANGE_STEP,
    currentStep: index
})

export const handleStepChange = (index) => {
    return (dispatch) => {
        dispatch(changeStep(index))
    }
}
