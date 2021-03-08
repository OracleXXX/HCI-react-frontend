import * as constants from './constants'
import {fromJS} from "immutable";

const defaultState = fromJS({

    displayMenu: false,
    navItems: [['asd', 'asds'], ["asd", 'gfh']],
    showBanner: true
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_DROPDOWN:
            return state.set('displayMenu', !action.dropped);
        case constants.CHANGE_SHOW_BANNER:
            return state.set('showBanner', action.status)
        default:
            return state;
    }
}