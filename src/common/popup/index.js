import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import {PopupWrapper, PopupItem} from './style';

class Popup extends PureComponent {
    render() {
        return (
            <PopupWrapper className="" >
                <PopupItem className="popup-item">

                </PopupItem>

            </PopupWrapper>
        )
    }


}

const mapStateToProps = (state) => {

}
const mapDispatchToProps = (dispatch) => {



};
export default connect(mapStateToProps, mapDispatchToProps)(Popup);