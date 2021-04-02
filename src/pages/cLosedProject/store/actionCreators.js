import axios from 'axios'
import * as constants from './constants'
import {fromJS} from "immutable";
import {domain, closed_project as closedProjectApi} from '../../../common/api/api';


const changeNoFlippingList = (result) => ({
    type: constants.CHANGE_NO_FLIPPING_LIST,
    noFlippingList: fromJS(result),

})
const changeFlippingList = (result) => ({
    type: constants.CHANGE_FLIPPING_LIST,
    flippingList: fromJS(result),

})
const sliderChange = (flipping) => ({
    type: constants.CHANGE_SLIDER,
    flipping
});
const getDetailList = (id, result) => ({
    type: constants.GET_DETAIL_LIST,
    detailList: fromJS(result),
    id
});
export const getNoFlippingList = (id) => {
    return (dispatch) => {
        axios.get(domain + closedProjectApi.noFlipping.list).then((res) => {
            const result = res.data;
            dispatch(changeNoFlippingList(result));
        });
    }
}
export const getFlippingList = (id) => {

    return (dispatch) => {
        axios.get(domain + closedProjectApi.flipping.list).then((res) => {
            const result = res.data;
            dispatch(changeFlippingList(result));
        });
    }
}
export const handleSliderChange = (flipping) => {
    return (dispatch) => {
        dispatch(sliderChange(flipping));
    }
}
export const getDetail = (id) => {
    if (id === -1) {
        return dispatch => dispatch(getDetailList(id, []))
    }
    return (dispatch) => {
        axios.get(domain + closedProjectApi.detailList + id).then((res) => {
            const result = res.data;
            dispatch(getDetailList(id, result));
        });
    }
};


