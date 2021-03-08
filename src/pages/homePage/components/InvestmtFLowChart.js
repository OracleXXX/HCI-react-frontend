import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
// 导入css样式组件
import {
    InvestmtFlowChartWrapper,
    FlowChart,
    FlowChartTitle,
    EvenWrapper,
    OddWrapper,
    EvenStepWrapper,
    OddStepWrapper,
    OddImgToIndex,
    OddIndexContent,
    EvenImgToIndex,
    EvenIndexContent,
    MoreInfo

} from '../componentStyles/InvestmtFLowChartStyle';
//导入图片
import {constants} from '../store'
import {Link} from "react-router-dom";
import * as router from '../../../router/router'

class InvestmtFLowChart extends PureComponent {

    render() {
        //拆分成奇数序号和偶数序号两个组件来遍历
        return (
            <InvestmtFlowChartWrapper className='scale-control'>
                <FlowChartTitle>
                    <span className='title'>项目投资流程</span>
                    <div className='rec'/>
                </FlowChartTitle>
                <FlowChart className='no-select'>
                    {/*奇数流程*/}
                    <OddWrapper>
                        {this.getFlowChart()[0]}
                    </OddWrapper>
                    {/*偶数流程*/}
                    <EvenWrapper>
                        {this.getFlowChart()[1]}

                    </EvenWrapper>

                </FlowChart>

            </InvestmtFlowChartWrapper>
        )
    }

    getFlowChart() {
        /*console.log(mapStepListToString[0][0]);*/
        const OddFlowChartList = [];
        const EvenFlowChartList = [];
        for (let i = 0; i < 7; i++) {
            const src = constants.MAP_STEP_LIST_TO_STRING[i][0];
            const indexIcon = constants.MAP_STEP_LIST_TO_STRING[i][1];
            const title = constants.MAP_STEP_LIST_TO_STRING[i][2];
            const subTitle = constants.MAP_STEP_LIST_TO_STRING[i][3];
            const content1 = constants.MAP_STEP_LIST_TO_STRING[i][4];
            const content2 = constants.MAP_STEP_LIST_TO_STRING[i][5];
            if (i % 2 === 0) {
                OddFlowChartList.push(
                    <OddStepWrapper key={constants.MAP_STEP_LIST_TO_STRING[i][2]}>
                        <div className='oddStep'>
                            <img src={src} alt="" className="flow-chart-img"/>
                            {this.getOddIndexToImg(indexIcon, title, subTitle, content1, content2, i)}
                        </div>
                    </OddStepWrapper>
                )
            } else {
                EvenFlowChartList.push(
                    <EvenStepWrapper key={constants.MAP_STEP_LIST_TO_STRING[i][2]}>
                        <div className='evenStep'>
                            {this.getEvenIndexToImg(indexIcon, title, subTitle, content1, content2, i)}
                            <img src={src} alt="" className="flow-chart-img"/>
                        </div>
                    </EvenStepWrapper>
                )

            }
        }
        return [OddFlowChartList, EvenFlowChartList];
    }

    //奇数流程图序号的虚线+序号+详情样式
    getOddIndexToImg(indexIcon, title, subTitle, content1, content2, index) {
        return (
            <OddImgToIndex>
                <div className='imgToIndex-odd'>
                    <img src={constants.ODD_DASH} alt="" className='oddDash'/>
                    <img src={indexIcon} alt="" className='oddIndex'/>
                    <OddIndexContent>
                        <div className='oddContentTitle'>{title}</div>
                        {/* 判断是否为参数空 */}
                        {{subTitle} ? <div className='oddContentTitle'>{subTitle}</div> : null}
                        {{content1} ? <div className='oddContent'>{content1}</div> : null}
                        {{content2} ? <div className='oddContent'>{content2}</div> : null}
                        {this.getMoreInfo(index)}
                    </OddIndexContent>
                </div>
            </OddImgToIndex>
        )
    }

    //偶数流程图序号的虚线+序号+详情样式
    getEvenIndexToImg(indexIcon, title, subTitle, content1, content2, index) {
        return (
            <EvenImgToIndex>
                <div className='imgToIndex-even'>
                    <img src={constants.EVEN_DASH} alt="" className='evenDash'/>
                    <img src={indexIcon} alt="" className='evenIndex'/>
                    <EvenIndexContent>
                        <div className='evenContentTitle'>{title}</div>
                        {/* 判断是否为参数空 */}
                        {{subTitle} ? <div className='evenContentTitle'>{subTitle}</div> : null}
                        {{content1} ? <div className='evenContent'>{content1}</div> : null}
                        {{content2} ? <div className='evenContent'>{content2}</div> : null}
                        {this.getMoreInfo(index)}
                    </EvenIndexContent>
                </div>
            </EvenImgToIndex>
        )
    }

    getMoreInfo(index) {
        return (
            <Link
                to={index === 6 ? router.closed_project.path : index === 5 ? router.one_step.path + router.management.path : router.one_step.path + router.long_short.path}>
                <MoreInfo className="button">
                    <span>了解详情</span>
                    <img src={constants.MORE_INFO_ICON} alt="" className='moreInfoIcon-blue'/>
                </MoreInfo>
            </Link>
        )
    }
}

export default connect(null, null)(InvestmtFLowChart);