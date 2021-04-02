import {constants} from "./index";
import axios from "axios";
import {fromJS} from "immutable";



const changeStep = (index) => ({
    type: constants.CHANGE_STEP,
    currentStep: index
})
const handleGetSteps = (result) => ({
    type: constants.GET_STEPS,
    steps: fromJS(result),
})

export const handleStepChange = (index) => {
    return (dispatch) => {
        dispatch(changeStep(index))
    }
}

export const getSteps = ()  => {
    const params = {
        pageSize: 10,
        pageNumber: 1,
      }
    return (dispatch) => {
        axios.get('https://api.homecapus.com/api/platformLoan', {params: params}).then(res => {
            dispatch(handleGetSteps(res.data.data.steps))
        })

    }
}