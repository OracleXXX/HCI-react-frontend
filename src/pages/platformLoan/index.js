import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
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
import {actionCreators} from './store';
import {ActivityTitle as PlatformLoanTitle} from "../oneStepService/activities/style";

import loanPic from '../../statics/imgs/PlatformLoan/loanPic.png'
import arrowToBot from '../../statics/imgs/PlatformLoan/arrowToBot.png'
import arrowToLB from '../../statics/imgs/PlatformLoan/arrowToLB.png'
import arrowToRB from '../../statics/imgs/PlatformLoan/arrowToRB.png'

class PlatformLoan extends PureComponent {

    render() {
        return (
            <PlatformLoanWrapper>
                <PlatformLoanTitle>
                    <div className='title'>平台贷款</div>
                    <div className='rec'/>
                </PlatformLoanTitle>
                <Comment><p>个人房屋抵押贷款是指申请人以自己的房屋产权作为抵押向银行申请贷款,贷款资金的用途可用作个人消费和运营。</p>
                    <p>个人房屋抵押贷款区别个人住房抵押贷款。而个人住房贷款是指银行向借款人发放的用于购买自用普通住房的贷款。借款人申请个人住房贷款时必须提供担保。</p></Comment>
                <LoanFlowChart>
                    <FlowChartMain>
                        {this.getFlowChartLeft()}
                        {this.getFlowChartMid()}
                        {this.getFlowChartRight()}
                    </FlowChartMain>
                    <FlowChartImg>
                        <img src={loanPic} alt=""/>
                    </FlowChartImg>
                </LoanFlowChart>
                <AdditionInfo>
                    <AdditionInfoContainer>
                        <AdditionInfoContainerItem>
                            <div className="circle-content"><Circle/><span>Not Real Property</span></div>
                            <div className="circle-content"><Circle/><span>UCC Foreclosure Process</span></div>
                        </AdditionInfoContainerItem>
                        <AdditionInfoContainerItem>
                            <div className="circle-content"><Circle/><span>&lt;3 Months to foreclose</span></div>
                            <div className="circle-content"><Circle/><span>Nonjudicial Proceeding</span></div>
                        </AdditionInfoContainerItem>
                        <AdditionInfoContainerItem>
                            <div className="circle-content"><Circle/><span>Interest in Real Property</span></div>
                            <div className="circle-content"><Circle/><span>18-24 Months to Foreclose</span></div>
                        </AdditionInfoContainerItem>
                        <AdditionInfoContainerItem>
                            <div className="circle-content"><Circle/><span>Judicial Proceeding</span></div>
                            <div className="circle-content"><Circle/><span>Moratorium</span></div>
                        </AdditionInfoContainerItem>




                    </AdditionInfoContainer>

                </AdditionInfo>

            </PlatformLoanWrapper>

        )
    }

    getFlowChartLeft() {
        return (
            <FLowCharLeft>
                <FlowChartItem>
                    <div className="flow-chart-content">Owner of Real Estate Owner</div>
                </FlowChartItem>
                <img src={arrowToBot} alt="" className='arrow-to-bot'/>
                <FlowChartItem>
                    <div className="flow-chart-content">Real Estate Owner</div>
                </FlowChartItem>
                <img src={arrowToBot} alt="" className='arrow-to-bot'/>
                <FlowChartItem>
                    <div className="flow-chart-content">Real Estate</div>
                </FlowChartItem>
            </FLowCharLeft>
        )
    }

    getFlowChartMid() {
        return (
            <FlowChartMid>
                {this.getMidItem()}
                {this.getMidItem()}
            </FlowChartMid>
        )
    }

    getMidItem() {
        return (
            <MidItem>
                <img src={arrowToRB} alt=""/>
                <img src={arrowToLB} alt=""/>

            </MidItem>
        )
    }
    getFlowChartRight() {
        return (
            <FlowChartRight>
                <FlowChartItem>
                    <div className="flow-chart-content">Pledge of Ownership Interests</div>
                </FlowChartItem>
                <FlowChartItem>
                    <div className="flow-chart-content">Mortgage</div>
                </FlowChartItem>

            </FlowChartRight>
        )
    }
    /*    componentDidMount() {
            this.props.getDetail(this.props.match.params.id);
        }*/


}

//用connect + mapstate 就可以直接取出store中的数据
const mapState = (state) => ({});
const mapDispatch = (dispatch) => ({})

export default connect(mapState, mapDispatch)(withRouter(PlatformLoan));


//模板
/*
import React, {Component} from 'react';
class Detail extends Component {
    render() {
        return (
            <div>Detail


            </div>
        )
    }
}
export default Detail;
*/
