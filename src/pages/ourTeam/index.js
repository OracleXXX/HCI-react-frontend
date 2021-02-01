import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {constants} from './store';
import {ActivityTitle as OurTeamTitle} from "../oneStepService/activities/style";
import {
    OurTeamWrapper,
    OurTeamContainer,
    ContainerItem,
    ItemWrapper,
    Avatar,
    Name,
    Position,
    Introduction
} from './style';
import {actionCreators as HeaderActionCreators} from "../../common/header/store";

class OurTeam extends PureComponent {
    constructor(props) {
        super(props)
        this.ScrollTo = React.createRef()   // Create a ref object
    }
    scrollToMyRef = () => window.scrollTo(0, this.ScrollTo.current.offsetTop - 100)
    render() {
        return (
            <OurTeamWrapper ref={this.ScrollTo}>
                <OurTeamTitle>
                    <div className='title'>团队背景</div>
                    <div className='rec'/>
                </OurTeamTitle>
                <OurTeamContainer className='no-select'>{this.getOurTeamContainer()}</OurTeamContainer>
            </OurTeamWrapper>
        )
    }
    getOurTeamContainer() {
        return (
            constants.TEAM_MEMBERS.map((item, index) => {
                return (
                    <ContainerItem key={index}>
                        <ItemWrapper>
                        <Avatar>
                            <div className='avatar'>
                                <img src={constants.TEAM_AVATAR[index]} alt=""/>
                            </div>
                        </Avatar>
                        <Name>{item}</Name>
                        <Position>{constants.TEAM_POSITION[index]}</Position>
                        <Introduction>{constants.TEAM_INTRO[index]}</Introduction>
                            </ItemWrapper>
                    </ContainerItem>
                )
            })
        )
    }
    componentDidMount() {
        this.props.hideShowBanner()
        this.scrollToMyRef()
    }
}
const mapDispatch = (dispatch) => ({
    hideShowBanner() {
        dispatch(HeaderActionCreators.changeShowBanner(true));
    }
});
export default connect(null, mapDispatch)(withRouter(OurTeam));
