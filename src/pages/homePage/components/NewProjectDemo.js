import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
// 轮播组件
import Slider from 'react-slick';

//导入css.js
import {
    NewProjectDemoWrapper,
    SliderTitle,
    SliderWrapper,
    Item,
    ImgBottom,
    MoreInfo,
    PrevArrow,
    NextArrow,

} from '../componentStyles/NewProjectDemoStyle';
// 导入页面静态资源
import {constants} from '../store'
import {new_project as newProjectApi} from "../../../router/router";
import {withRouter, Link} from "react-router-dom";
import {domain} from "../../../common/api/api";


class NewProjectDemo extends PureComponent {
    constructor(props) {
        super(props);
        //绑定this
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);

    }

    next() {
        console.log(this.props.list2)
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }

    render() {
        // 轮播图设置
        return (
            <NewProjectDemoWrapper className='scale-control'>
                {/* 图轮播图title */}
                <SliderTitle>
                    <Link to={newProjectApi.path}>
                        <div className='title'>精选房源</div>
                    </Link>
                    <div className='rec'/>
                    <div><p className='subTitle'>进行深入研究并浏览附近的原始照片，无人机画面，居民评论和当地见解，以了解待售房屋是否适合您。</p></div>
                </SliderTitle>
                {/* 轮播图 */}
                <SliderWrapper>
                    {/* 左右指针 */}
                    <PrevArrow className="button hovered" onClick={this.previous}/>
                    <NextArrow className="button" onClick={this.next}/>
                    <Slider ref={c => (this.slider = c)} {...constants.NEW_PROJECT_SETTINGS} >
                        {
                            this.props.newProjectList.map((item) => (
                                <div key={item.get('id')} className='slider'>
                                    <Item>
                                        <img src={domain + item.get('avatar')} alt="" className=''/>
                                        <ImgBottom>
                                            <div className="img-bottom-left">
                                                <img src={constants.ADDR_ICON} alt=""/>
                                                {item.get("city")}
                                            </div>
                                            <Link to={newProjectApi.detail + item.get("id")}>
                                                <MoreInfo className="button">
                                                    <span>详情</span>
                                                    <img src={constants.MORE_INFO_ICON} alt=""/>
                                                </MoreInfo>
                                            </Link>
                                        </ImgBottom>
                                        <div className='intro'>
                                            <div className='intro-left'>
                                                <span>{item.get('price')}</span>
                                                <span className='perMonth'>{item.get('month')}</span>
                                            </div>
                                            <span
                                                className='intro-right'>{item.get('area') + "/" + item.get('status')}</span>
                                        </div>
                                    </Item>
                                </div>
                            ))
                        }
                    </Slider>
                </SliderWrapper>
            </NewProjectDemoWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    // 去store提取state数据 map到props
    newProjectList: state.getIn(['newProject', "newProjectList"])
})
export default connect(mapStateToProps, null)(withRouter(NewProjectDemo));
