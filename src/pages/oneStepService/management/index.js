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

//import image
class Management extends PureComponent {

    render() {
        return (
            <ManagementWrapper>
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
            constants.FLOW_CHART_IMGS.map((item, index) => {
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
}

export default connect(null, null)(withRouter(Management));

