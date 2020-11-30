import React, {Fragment, PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {constants} from './store';
import {
    ManagementWrapper,
    ManagementFlowChart,
    FlowChartItem

} from './style'
import {ActivityTitle as ManagementTitle} from "../../oneStepService/activities/style";

class Management extends PureComponent {
    constructor(props) {
        super(props)
        this.ScrollTo = React.createRef()   // Create a ref object
    }
    scrollToMyRef = () => window.scrollTo(0, this.ScrollTo.current.offsetTop - 100)
    render() {
        return (
            <ManagementWrapper ref={this.ScrollTo}>
                <ManagementTitle>
                    <div className='title'>一站式房屋管理流程</div>
                    <div className='rec no-select'/>
                </ManagementTitle>
                <ManagementFlowChart>{this.getFLowChart()}</ManagementFlowChart>
            </ManagementWrapper>
        )
    }

    getFLowChart() {
        return (
            constants.FLOW_CHART_IMG.map((item, index) => {
                return (
                    <Fragment key={index}>
                        <FlowChartItem>
                            <img src={item} alt="" className='flow-chart-img no-select'/>
                            <div className="flow-chart-content">{constants.FLOW_CHART_CONTENTS[index]}</div>
                        </FlowChartItem>
                        {index < 4 ? <FlowChartItem>
                            <img src={constants.FLOW_CHART_ARROW} alt="" className='flow-chart-arrow no-select'/>
                        </FlowChartItem> : null}
                    </Fragment>
                )
            })
        )
    }
    componentDidMount() {
        this.scrollToMyRef()
    }
}

export default connect(null, null)(withRouter(Management));

