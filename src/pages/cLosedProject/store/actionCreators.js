import axios from 'axios'
import * as constants from './constants'
import {fromJS} from "immutable";


const changeNoFlippingList = (result) => ({
    type: constants.CHANGE_NO_FLIPPING_LIST,
    noFlippingList: fromJS(result.noFlippingList),

})
const changeFlippingList = (result) => ({
    type: constants.CHANGE_FLIPPING_LIST,
    flippingList: fromJS(result.flippingList),

})
const sliderChange = (flipping) => ({
    type:constants.CHANGE_SLIDER,
    flipping
})
export const getNoFlippingList = (id) => {
    return (dispatch) => {
        axios.get('/api/closedProject/noFlippingList.json').then((res) => {
                const result = res.data.data;
                dispatch(changeNoFlippingList(result));
            }
        );

    }
}
export const getFlippingList = (id) => {
    return (dispatch) => {
        axios.get('/api/closedProject/flippingList.json').then((res) => {
                const result = res.data.data;
                dispatch(changeFlippingList(result));
            }
        );

    }
}
export const handleSliderChange = (flipping) => {
    return (dispatch) => {
        dispatch(sliderChange(flipping));
    }
}
