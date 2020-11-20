import axios from 'axios'
import * as constants from './constants'
import {fromJS} from "immutable";


const changeClosedProjectList = (result) => ({
    type: constants.CHANGE_CLOSED_PROJECT_LIST,
    noFlippingList: fromJS(result.noFlippingList),
    flippingList: fromJS(result.flippingList)

})
const sliderChange = (flipping) => ({
    type:constants.CHANGE_SLIDER,
    flipping
})
export const getClosedProjectList = (id) => {
    return (dispatch) => {
        axios.get('/api/closeProjectList.json').then((res) => {
                const result = res.data.data;
                dispatch(changeClosedProjectList(result));
            }
        );

    }
}
export const handleSliderChange = (flipping) => {
    return (dispatch) => {
        dispatch(sliderChange(flipping));
    }
}
