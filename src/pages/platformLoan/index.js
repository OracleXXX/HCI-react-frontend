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
import {get} from "immutable";

let names = []
let descriptions = []
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
                        <p className={'info-title'}>{names[this.props.currentStep]}</p>
                        <div className={'info-content'} dangerouslySetInnerHTML={{ __html: descriptions[this.props.currentStep]}}/>
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
                    <img src={constants.data.steps[i].img_focus} className='step' alt=""  key={constants.data.steps[i].img_focus}/>
                    : <img src={constants.data.steps[i].img} className='step' alt="" key={constants.data.steps[i].img} onClick={() => {this.props.handleStepChange(i)}}/>
            )
            if (i < 4) {
                res.push(<img src={constants.ARROW} alt="" className='arrow' key={i}/>)
            }

        }
        this.props.steps.map(item => {
            names.push(item.get('name'))
            descriptions.push(item.get('description'))
        })
        console.log(names[0])
        return res
    }
    componentDidMount() {
        this.props.hideShowBanner()
        this.scrollToMyRef()
        this.props.getSteps()
    }
}
const mapStateToProps = (state) => ({
    currentStep: state.getIn(['platformLoan', 'currentStep']),
    steps: state.getIn(['platformLoan', 'steps']),
})

const mapDispatch = (dispatch) => ({
    hideShowBanner() {
        dispatch(HeaderActionCreators.changeShowBanner(true));
    },
    handleStepChange(index) {
        dispatch(actionCreators.handleStepChange(index))
    },
    getSteps() {
        dispatch(actionCreators.getSteps())
    }
});
export default connect(mapStateToProps, mapDispatch)(withRouter(PlatformLoan));
