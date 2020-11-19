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
import test from '../../statics/imgs/dadige.jpg'

class OurTeam extends PureComponent {

    render() {
        return (
            <OurTeamWrapper>
                <OurTeamTitle>
                    <div className='title'>团队背景</div>
                    <div className='rec'/>
                </OurTeamTitle>
                <OurTeamContainer>{this.getOurTeamContainer()}</OurTeamContainer>
            </OurTeamWrapper>
        )
    }
    getOurTeamContainer() {
        return (
            constants.TEAM_MEMBERS.map((item, index) => {
                return (
                    <ContainerItem>
                        <ItemWrapper>
                        <Avatar>
                            <div className='avatar'>
                                <img src={test} alt=""/>
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
}
export default connect(null, null)(withRouter(OurTeam));
