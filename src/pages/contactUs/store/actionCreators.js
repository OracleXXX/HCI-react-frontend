import axios from 'axios'
import * as constants from './constants'
import {fromJS} from "immutable";


const testreact = (result) => ({

    type: constants.TEST,
    list: fromJS(result),


})

export const handleTest = () => {
    return (dispatch) => {
        axios.get('http://localhost:8080/api/test').then((res) => {
                const result = res.data;

                dispatch(testreact(result));
            }
        );
    }
}
