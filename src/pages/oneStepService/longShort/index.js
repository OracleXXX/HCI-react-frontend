import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {constants} from './store';
import {ActivityTitle as LongShortTitle} from "../../oneStepService/activities/style";
import {
    LongShortWrapper,
    LongShortFlowChart,
    FlowChartItem
} from "./style";


class LongShort extends PureComponent {
    constructor(props) {
        super(props)
        this.ScrollTo = React.createRef()   // Create a ref object
    }
    scrollToMyRef = () => window.scrollTo(0, this.ScrollTo.current.offsetTop - 100)
    render() {
        return (
            <LongShortWrapper ref={this.ScrollTo}>
                <LongShortTitle>
                    <div className='title'>一站式房屋买卖流程</div>
                    <div className='rec no-select'/>
                </LongShortTitle>
                <LongShortFlowChart>{this.getFLowChart()}</LongShortFlowChart>
            </LongShortWrapper>
        )
    }
    getFLowChart() {
        return (
            constants.FLOW_CHART_IMG.map((item, index) => {
                return (
                    <FlowChartItem key={index}>
                        <img src={item} alt="" className='long-short-img'/>
                        <div className='long-short-content'>
                            <div className='content'>{constants.FLOW_CHART_CONTENT[index]}</div>
                        </div>
                        <img src={constants.FLOW_CHART_INDEX[index]} alt="" className='long-short-index'/>
                    </FlowChartItem>
                )
            })
        )
    }
    componentDidMount() {
        this.scrollToMyRef()
    }
}
export default connect(null, null)(withRouter(LongShort));

