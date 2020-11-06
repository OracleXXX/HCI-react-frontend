import React, {PureComponent} from 'react';
import {INVTFlowChartWrapper} from '../style';
import {connect} from 'react-redux';

class INVTFlowChart extends PureComponent {
    render() {
        return (
                <INVTFlowChartWrapper>
                    <h1>
                        流程图
                    </h1>
                </INVTFlowChartWrapper>

        )
    }
}

export default connect(null, null)(INVTFlowChart);
