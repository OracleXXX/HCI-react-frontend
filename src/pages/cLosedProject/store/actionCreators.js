import axios from 'axios'
import * as constants from './constants'

const changeClosedProjectList = (result)=> ({
    type: constants.CHANGE_CLOSED_PROJECT_LIST,
    noFlippingList: result.noFlippingList,
    flippingList: result.flippingList

})

export const getClosedProjectList=(id)=> {
    return (dispatch) => {
        axios.get('/api/closeProjectList.json').then((res)=> {
            const result =res.data.data;
            dispatch(changeClosedProjectList(result));
            }

        );

    }
}
