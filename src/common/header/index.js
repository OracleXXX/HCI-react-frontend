import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import Banner from './Banner';
import {actionCreators} from './store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    DropDownServices,
} from "./style";

import logoPic from '../../statics/imgs/headerImgs/Inc-Logo-0.jpg';
import './addtionStyle.css';
import {constants} from "./store";


class Header extends PureComponent {
    scrollToTop = () => window.scrollTo(0, 0)

    render() {
        const {showBanner} = this.props;
        return (
            <div>
                <HeaderWrapper className='no-select'>
                    {/* 导航 */}
                    <Nav>{this.getNavBar()}</Nav>
                </HeaderWrapper>
                {/* slide Banner */}
                { showBanner? <Banner/> : null}

            </div>
        )
    }

    getDropDown() {
        const {displayMenu} = this.props;
        return (
            <DropDownServices className={displayMenu ? "drop-down-active" : "dropdown"}>
                {
                    constants.DROP_DOWN_BAR.map((item, index) => {
                        return (
                            <Link to={item.link} key={item.name}>
                                <div className="dropDownItem">{item.name}</div>
                            </Link>
                        )
                    })
                }
            </DropDownServices>
        )

    };

    getNavBar() {
        const {handleDropDown, displayMenu} = this.props;
        return (
            constants.NAV_BAR.map((item, index) => {
                if (index !== 2) {
                    return (
                        <Link to={item.link} key={item.name}>
                            <NavItem className={index === 0 ? 'CompName' : "left"}
                                     onClick={index === 0 ? () => {
                                         this.scrollToTop()
                                     } : null}>
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
                                handleDropDown(false)
                            }}
                            onMouseLeave={() => {
                                handleDropDown(true)
                            }}
                            key={item.name}
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
        navItems: state.getIn(['header', 'navItems']),
        showBanner: state.getIn(['header', 'showBanner'])
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