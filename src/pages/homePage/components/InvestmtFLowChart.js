import React, {PureComponent} from 'react';
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
    IndexContent,
    EvenImgToIndex,
    EvenIndexContent

} from '../componentStyles/InvestmtFLowChartStyle';
//导入图片
import step1 from '../../../statics/imgs/homePageImgs/InvestmtFLowChartImgs/flowChart1.png';
import step2 from '../../../statics/imgs/homePageImgs/InvestmtFLowChartImgs/flowChart2.png';
import step3 from '../../../statics/imgs/homePageImgs/InvestmtFLowChartImgs/flowChart3.png';
import step4 from '../../../statics/imgs/homePageImgs/InvestmtFLowChartImgs/flowChart4.png';
import step5 from '../../../statics/imgs/homePageImgs/InvestmtFLowChartImgs/flowChart5.png';
import step6 from '../../../statics/imgs/homePageImgs/InvestmtFLowChartImgs/flowChart6.png';
import step7 from '../../../statics/imgs/homePageImgs/InvestmtFLowChartImgs/flowChart7.png';
import index1 from '../../../statics/imgs/homePageImgs/InvestmtFLowChartImgs/index1.png';
import index2 from '../../../statics/imgs/homePageImgs/InvestmtFLowChartImgs/index2.png';
import index3 from '../../../statics/imgs/homePageImgs/InvestmtFLowChartImgs/index3.png';
import index4 from '../../../statics/imgs/homePageImgs/InvestmtFLowChartImgs/index4.png';
import index5 from '../../../statics/imgs/homePageImgs/InvestmtFLowChartImgs/index5.png';
import index6 from '../../../statics/imgs/homePageImgs/InvestmtFLowChartImgs/index6.png';
import index7 from '../../../statics/imgs/homePageImgs/InvestmtFLowChartImgs/index7.png';
import oddDash from '../../../statics/imgs/homePageImgs/InvestmtFLowChartImgs/oddDash.svg';
import evenDash from '../../../statics/imgs/homePageImgs/InvestmtFLowChartImgs/evenDash.svg';
import {connect} from 'react-redux';
import moreInfoIcon from "../../../statics/imgs/homePageImgs/InvestmtFLowChartImgs/moreInfoIcon-blue.png";
import {InnerImg} from "../componentStyles/NewProjectDemoStyle";

//映射导入的图片组件
const mapStepListToString = [
    [step1, index1, '选定房源'],
    [step2, index2, '咨询详情回报'],
    [step3, index3, '与HCI签订合同并'],
    [step4, index4, '资金'],
    [step5, index5, '房屋情况'],
    [step6, index6, '管理合同'],
    [step7, index7, '项目展示']
];

class InvestmtFLowChart extends PureComponent {
    render() {

        return (
            <InvestmtFlowChartWrapper>
                <FlowChartTitle>
                    <span className='title'>项目投资流程</span>
                    <div className='rec'/>
                </FlowChartTitle>
                <FlowChart>
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
        console.log(mapStepListToString[0][0]);
        const OddFlowChartList = [];
        const EvenFlowChartList = [];
        for (let i = 0; i < 7; i++) {
            const src = mapStepListToString[i][0];
            console.log(i % 2)
            if (i % 2 === 0) {
                OddFlowChartList.push(
                    <OddStepWrapper>
                        <div className='oddStep'>
                            <img src={src} alt=""/>
                            {this.getOddIndexToImg(mapStepListToString[i][1], mapStepListToString[i][2])}
                        </div>
                    </OddStepWrapper>
                )
            } else {
                EvenFlowChartList.push(
                    <EvenStepWrapper>
                        <div className='evenStep'>
                            {this.getEvenIndexToImg(mapStepListToString[i][1], mapStepListToString[i][2])}
                            <img src={src} alt=""/>
                        </div>
                    </EvenStepWrapper>
                )

            }
        }
        return [OddFlowChartList, EvenFlowChartList];
    }

    //奇数流程图序号的虚线+序号+详情样式
    getOddIndexToImg(indexIcon, content) {
        return (
            <OddImgToIndex>
                <div className='imgToIndex-odd'>
                    <img src={oddDash} alt="" className='oddDash'/>
                    <img src={indexIcon} alt="" className='oddIndex'/>
                    <IndexContent>
                        <div className='stepContent'>{content}</div>
                        {/*<div className='stepContentAddition'>选定房源</div>*/}
                        <div className='stepMoreInfo'>
                            <span>了解详情</span>
                            <img src={moreInfoIcon} alt="" className='moreInfoIcon-blue'/>
                        </div>
                    </IndexContent>
                </div>
            </OddImgToIndex>
        )
    }

    //偶数流程图序号的虚线+序号+详情样式
    getEvenIndexToImg(indexIcon, content) {

        return (
            <EvenImgToIndex>
                <div className='imgToIndex-even'>
                    <img src={evenDash} alt="" className='evenDash'/>
                    <img src={indexIcon} alt="" className='evenIndex'/>
                    <EvenIndexContent>
                        <div className='stepContent evenContent'>{content}</div>
                        {/*<div className='stepContentAddition'>选定房源</div>*/}
                        <div className='stepMoreInfo evenMoreInfo'>
                            <span>了解详情</span>
                            <img src={moreInfoIcon} alt="" className='moreInfoIcon-blue'/>
                        </div>
                    </EvenIndexContent>

                </div>
            </EvenImgToIndex>
        )

    }
}

export default connect(null, null)(InvestmtFLowChart);