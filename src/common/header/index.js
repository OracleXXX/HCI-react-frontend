import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from "react-transition-group";
import {actionCreators} from './store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
} from "./style";


class Header extends Component {
    getListArea() {
        const {
            focused, list, page, totalPage, mouseIn,
            handleMouseEnter, handleMouseLeave, handleChangePage, handleMouseHover, handleMouseOut
        } = this.props;
        const pageList = [];
        const newList = list.toJS();
        if (newList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if (mouseIn || focused) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch
                            ref={(hoverTarget) => {
                                this.hoverTarget = hoverTarget
                            }}
                            onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
                            onMouseEnter={() => handleMouseHover(this.hoverTarget)}
                            onMouseLeave={() => handleMouseOut(this.hoverTarget)}
                        >
                            {/*ref 可以获得dom节点*/}
                            <i ref={(icon) => {
                                this.spinIcon = icon
                            }} className="iconfont spin">&#xe851;</i>
                            换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }

    render() {
        const {focused, handleInputFocus, handleInputBlur, list} = this.props;
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className='left'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            >{}</NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe69d;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writing'>
                        <i className="iconfont">&#xe678;</i>
                        写文章</Button>
                    <Button className='reg'>注册</Button>

                </Addition>
            </HeaderWrapper>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        /*focused: state.get('header').get('focused')*/
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        totalPage: state.getIn(['header', 'totalPage'])
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);