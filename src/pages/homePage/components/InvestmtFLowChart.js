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
    OddIndexContent,
    EvenImgToIndex,
    EvenIndexContent,
    MoreInfo

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
import moreInfoIcon from "../../../statics/imgs/homePageImgs/moreInfoIcon.png";


//映射静态资源
const mapStepListToString = [
    [step1, index1, '选定房源', '', '', ''],
    [step2, index2, '咨询详情及回报', '(交税流程、税务问题、法律问题)', '', ''],
    [step3, index3, '与HCI签订合同并交付定金', '', '', ''],
    [step4, index4, '资金', '', 'a.现金（交易具体流程）', 'b.私人贷款（私人贷款法律规范及流程）'],
    [step5, index5, '房屋情况', '', 'a.房屋状况检查表', 'b.装修预算表'],
    [step6, index6, '管理合同', '', 'a.第一年全包合同（10个月一次性租金回报） ', 'b.正常管理合同（10%管理费）'],
    [step7, index7, '项目展示', '', '', '']
];

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
            const src = mapStepListToString[i][0];
            const indexIcon = mapStepListToString[i][1];
            const title = mapStepListToString[i][2];
            const subTitle = mapStepListToString[i][3];
            const content1 = mapStepListToString[i][4];
            const content2 = mapStepListToString[i][5];

            if (i % 2 === 0) {
                OddFlowChartList.push(
                    <OddStepWrapper key={mapStepListToString[i][2]}>
                        <div className='oddStep'>
                            <img src={src} alt=""/>
                            {this.getOddIndexToImg(indexIcon, title, subTitle, content1, content2)}
                        </div>
                    </OddStepWrapper>
                )
            } else {
                EvenFlowChartList.push(
                    <EvenStepWrapper key={mapStepListToString[i][2]}>
                        <div className='evenStep'>
                            {this.getEvenIndexToImg(indexIcon, title, subTitle, content1, content2)}
                            <img src={src} alt=""/>
                        </div>
                    </EvenStepWrapper>
                )

            }
        }
        return [OddFlowChartList, EvenFlowChartList];
    }

    //奇数流程图序号的虚线+序号+详情样式
    getOddIndexToImg(indexIcon, title, subTitle, content1, content2) {
        return (
            <OddImgToIndex>
                <div className='imgToIndex-odd'>
                    <img src={oddDash} alt="" className='oddDash'/>
                    <img src={indexIcon} alt="" className='oddIndex'/>
                    <OddIndexContent>
                        <div className='oddContentTitle'>{title}</div>
                        {/* 判断是否为参数空 */}
                        {
                            {subTitle} ? <div className='oddContentTitle'>{subTitle}</div> : null
                        }
                        {
                            {content1} ? <div className='oddContent'>{content1}</div> : null
                        }
                        {
                            {content2} ? <div className='oddContent'>{content2}</div> : null
                        }
                        {this.getMoreInfo()}
                    </OddIndexContent>
                </div>
            </OddImgToIndex>
        )
    }

    //偶数流程图序号的虚线+序号+详情样式
    getEvenIndexToImg(indexIcon, title, subTitle, content1, content2) {

        return (
            <EvenImgToIndex>
                <div className='imgToIndex-even'>
                    <img src={evenDash} alt="" className='evenDash'/>
                    <img src={indexIcon} alt="" className='evenIndex'/>
                    <EvenIndexContent>
                        <div className='evenContentTitle'>{title}</div>
                        {/* 判断是否为参数空 */}
                        {

                            {subTitle} ? <div className='evenContentTitle'>{subTitle}</div> : null
                        }
                        {
                            {content1} ? <div className='evenContent'>{content1}</div> : null
                        }
                        {
                            {content2} ? <div className='evenContent'>{content2}</div> : null
                        }

                        {this.getMoreInfo()}

                        <div className='clear'/>
                    </EvenIndexContent>

                </div>
            </EvenImgToIndex>
        )

    }

    getMoreInfo() {
        return (
            <MoreInfo>
                <span>了解详情</span>
                <img src={moreInfoIcon} alt="" className='moreInfoIcon-blue'/>
            </MoreInfo>
        )
    }
}

export default connect(null, null)(InvestmtFLowChart);