import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
//css
import {
    PlatformLoanWrapper,
    Comment,
    LoanFlowChart,
    Steps, Info

} from './style'
import {ActivityTitle as PlatformLoanTitle} from "../oneStepService/activities/style";

import {actionCreators as HeaderActionCreators} from "../../common/header/store";
import {actionCreators, constants} from "./store";


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
                    <div className='title'>{constants.data.title}</div>
                    <div className='rec'/>
                </PlatformLoanTitle>
                {/*sub title*/}
                <Comment>
                    <p>{constants.data.shortDescription1}</p>
                    <p>{constants.data.shortDescription2}</p>
                </Comment>
                {/*main area*/}
                <LoanFlowChart className='no-select'>
                    {/*flow chart*/}
                    <Steps>
                        {this.getSteps()}
                    </Steps>
                    <Info>
                        <p className={'info-title'}>{constants.data.steps[this.props.currentStep].title}</p>
                        <p className={'info-content'}>{constants.data.steps[this.props.currentStep].info}</p>
                    </Info>

                </LoanFlowChart>
            </PlatformLoanWrapper>
        )
    }
    getSteps() {
        const res = []
        for (let i = 0; i < 5; i++) {
            res.push(
                this.props.currentStep === i ?
                    <img src={constants.data.steps[i].img_focus} className='step' alt=""  key={i}/>
                    : <img src={constants.data.steps[i].img} className='step' alt="" key={i} onClick={() => {this.props.handleStepChange(i)}}/>
            )
            if (i < 4) {
                res.push(<img src={constants.ARROW} alt="" className='arrow'/>)
            }

        }
        return res
    }









    componentDidMount() {
        this.props.hideShowBanner()
        this.scrollToMyRef()
    }
}
const mapStateToProps = (state) => ({
    currentStep: state.getIn(['platformLoan', 'currentStep'])
})

const mapDispatch = (dispatch) => ({
    hideShowBanner() {
        dispatch(HeaderActionCreators.changeShowBanner(true));
    },
    handleStepChange(index) {
        dispatch(actionCreators.handleStepChange(index))

    }
});
export default connect(mapStateToProps, mapDispatch)(withRouter(PlatformLoan));
