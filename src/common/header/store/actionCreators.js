import * as constants from './constants'


//----------------------------------

export const changeDropDown = (dropped) => ({
    type: constants.CHANGE_DROPDOWN,
    dropped

});
export const changeShowBanner = (status) => ({
    type: constants.CHANGE_SHOW_BANNER,
    status
});

