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
    FloatBar
} from "./style";

import logoPic from '../../statics/imgs/headerImgs/Inc-Logo-0.jpg';
import './addtionStyle.css';
import {constants} from "./store";

class Header extends PureComponent {
    scrollToTop = () => window.scrollTo(0, 0)

    render() {
        return (
            <div>
                <HeaderWrapper className='no-select'>

                    {/* 导航 */}
                    <Nav>{this.getNavBar()}</Nav>
                </HeaderWrapper>
                {/* 走马灯Banner */}
                <Banner/>
            </div>
        )
    }

    getDropDown() {
        const {displayMenu} = this.props;
        if (displayMenu) {
            return (
                <DropDownServices>
                    {
                        constants.DROP_DOWN_BAR.map((item, index) => {
                            return (
                                <Link to={item.link}>
                                    <div className="dropDownItem">{item.name}</div>
                                </Link>
                            )
                        })
                    }
                </DropDownServices>
            )
        } else {
            return null;
        }
    };

    getNavBar() {
        const {handleDropDown, displayMenu} = this.props;
        return (
            constants.NAV_BAR.map((item, index) => {
                if (index !== 2) {
                    console.log(item.link)
                    return (
                        <Link to={item.link}><NavItem className={index === 0 ? 'CompName' : "left"} onClick={()=>{this.scrollToTop()}}>
                            {index === 0 ? <Logo src={logoPic}/> : null}
                            <div className='nav-name'>{item.name}</div>
                        </NavItem>
                        </Link>
                    )
                } else {
                    return (
                        <NavItem
                            className='left'
                            onMouseEnter={() => {
                                handleDropDown(displayMenu)
                            }} onMouseLeave={() => {
                            handleDropDown(displayMenu)
                        }}
                            onClick={() => {
                                handleDropDown(displayMenu)
                            }}
                        >
                            <div className='nav-name'>{item.name}</div>
                            <img src={constants.TRIANGLE} alt="" className='triangle'/>
                            {this.getDropDown()}
                        </NavItem>
                    )
                }
            })
        )

    }


}

const mapStateToProps = (state) => {
    return {
        displayMenu: state.getIn(['header', 'displayMenu']),
        navItems: state.getIn(['header', 'navItems'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleDropDown(displayMenu) {
            dispatch(actionCreators.changeDropDown(displayMenu));
        }


    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);