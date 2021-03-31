import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
//css
import {
    PlatformLoanWrapper,
    Comment,
    LoanFlowChart,
    FlowChartMain,
    FLowCharLeft,
    FlowChartMid,
    MidItem,
    FlowChartRight,
    FlowChartImg,
    FlowChartItem,
    AdditionInfo,
    AdditionInfoContainer,
    AdditionInfoContainerItem,
    Circle

} from './style'
import {ActivityTitle as PlatformLoanTitle} from "../oneStepService/activities/style";

import loanPic from '../../statics/imgs/PlatformLoan/loanPic.png'
import arrowToBot from '../../statics/imgs/PlatformLoan/arrowToBot.png'
import arrowToLB from '../../statics/imgs/PlatformLoan/arrowToLB.png'
import arrowToRB from '../../statics/imgs/PlatformLoan/arrowToRB.png'
import {actionCreators as HeaderActionCreators} from "../../common/header/store";


class PlatformLoan extends PureComponent {
    constructor(props) {
        super(props)
        this.ScrollTo = React.createRef()   // Create a ref object
    }

    scrollToMyRef = () => window.scrollTo(0, this.ScrollTo.current.offsetTop - 100)

    render() {
        return (
            <PlatformLoanWrapper ref={this.ScrollTo} className='scale-control'>
                {/*title*/}
                <PlatformLoanTitle>
                    <div className='title'>平台贷款</div>
                    <div className='rec'/>
                </PlatformLoanTitle>
                {/*sub title*/}
                <Comment><p>平台作为房屋的所有者以房屋作为抵押向买方提供贷款。</p>
                    <p>买方向卖方支付不低于15%的首付，买卖双方商定其利率及分期付款的方式。（例：平台提供30年固定利率贷款，3年后将余额一次性付清）</p></Comment>
                {/*main area*/}
                <LoanFlowChart className='no-select'>
                    {/*flow chart*/}

                </LoanFlowChart>
            </PlatformLoanWrapper>
        )
    }









    componentDidMount() {
        this.props.hideShowBanner()
        this.scrollToMyRef()
    }
}
const mapStateToProps = (state) => ({

})

const mapDispatch = (dispatch) => ({
    hideShowBanner() {
        dispatch(HeaderActionCreators.changeShowBanner(true));
    }
});
export default connect(mapStateToProps, mapDispatch)(withRouter(PlatformLoan));
