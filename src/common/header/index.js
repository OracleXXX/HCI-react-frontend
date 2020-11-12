import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import Banner from './Banner';
import {actionCreators} from './store';

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    DropDownServices,
} from "./style";
import triangle from '../../statics/imgs/headerImgs/triangle.svg';
import logoPic from '../../statics/Inc-Logo.jpg';
import './addtionStyle.css';


class Header extends PureComponent {

    getDropDown() {
        const {displayMenu} = this.props;
        if (displayMenu) {
            return (
                <DropDownServices>
                    <ul>
                        <Link to='/one-step/management'>
                            <li className='dropDownItem'>一站式房屋管理</li>
                        </Link>
                        <Link to='/one-step/long-short'>
                            <li className='dropDownItem'>一站式房屋买卖</li>
                        </Link>
                        <Link to='/one-step/activities'>
                            <li className='dropDownItem'>平台活动</li>
                        </Link>
                    </ul>
                </DropDownServices>
            )
        } else {
            return null;
        }

    };


    render() {
        const {handleDropDown, displayMenu} = this.props;
        return (
            <div>
                <HeaderWrapper className='no-select'>

                    {/* 导航 */}
                    <Nav>
                        <Link to='/'><NavItem className='CompName'><Logo src={logoPic} alt=""/>HomeCap INC</NavItem></Link>
                        <Link to='/new-project'><NavItem className='left'>精选房源</NavItem></Link>
                        <NavItem
                            className='left'
                            onMouseEnter={() => {handleDropDown(displayMenu)}}
                            onMouseLeave={() => {handleDropDown(displayMenu)}}
                            onClick={() => {handleDropDown(displayMenu)}}

                        >
                            一站式服务
                            <img src={triangle} alt="" className='triangle'/>
                            {this.getDropDown()}
                        </NavItem>
                        <Link to='/platform-loan'><NavItem className='left'>平台贷款</NavItem></Link>
                        <Link to='/closed-project'><NavItem className='left'>项目展示</NavItem></Link>
                        <Link to='/our-team'><NavItem className='left'>团队背景</NavItem></Link>
                        <Link to='/news-feed'><NavItem className='left'>美房投资攻略</NavItem></Link>
                        <Link to='/contact-us'><NavItem className='left'>联系我们</NavItem></Link>
                    </Nav>

                </HeaderWrapper>
                {/* 走马灯Banner */}
                <Banner/>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        totalPage: state.getIn(['header', 'totalPage']),
        login: state.getIn(['login', 'login']),
        displayMenu: state.getIn(['header', 'displayMenu'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            (list.size === 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleMouseHover(target) {
            target.style.color = 'blue';

        },
        handleMouseOut(target) {
            target.style.color = '#666';

        },
        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            } else {
                dispatch(actionCreators.changePage(1));
            }
        },

        handleDropDown(displayMenu) {
            dispatch(actionCreators.changeDropDow(displayMenu));
        }


    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);