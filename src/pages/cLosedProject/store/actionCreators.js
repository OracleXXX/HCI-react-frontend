import axios from 'axios'
import * as constants from './constants'
import {fromJS} from "immutable";




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
const getDetailList = (id, result) =>({
    type: constants.GET_DETAIL_LIST,
    detailList: fromJS(result),
    id
});
const changePopIndexR = (index)=>({
    type: constants.CHANGE_POP_INDEX,
    index
})
export const getNoFlippingList = (id) => {
    return (dispatch) => {
        axios.get('http://52.34.204.235:8080/api/closed-project/noFlippingList').then((res) => {
            const result = res.data;
            dispatch(changeNoFlippingList(result));
        });
    }
}
export const getFlippingList = (id) => {
    return (dispatch) => {
        axios.get('http://52.34.204.235:8080/api/closed-project/flippingList').then((res) => {
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
    return (dispatch)=> {
        axios.get('http://52.34.204.235:8080/api/closed-project/detail/'+id).then((res) => {
            const result = res.data;
            dispatch(getDetailList(id, result));
        });
    }
};
export const changePopIndex = (index)=> {
    return (dispatch)=>{
        dispatch(changePopIndexR(index));
    }
}

