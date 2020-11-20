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
import addrIcon from '../../../statics/imgs/homePageImgs/addrIcon.png';
import moreInfoIcon from '../../../statics/imgs/homePageImgs/moreInfoIcon.png';

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
        const settings = {
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            pauseOnHover: true,
            arrows: false,
            lazyLoad: true,

        };

        return (
            <NewProjectDemoWrapper className='scale-control'>
                {/* 图轮播图title */}
                <SliderTitle>
                    <div className='title'>精选房源</div>
                    <div className='rec'/>
                    <div><p className='subTitle'>进行深入研究并浏览附近的原始照片，无人机画面，居民评论和当地见解，以了解待售房屋是否适合您。</p></div>
                </SliderTitle>
                {/* 轮播图 */}
                <SliderWrapper>
                    {/* 左右指针 */}
                    <PrevArrow className="button hovered" onClick={this.previous}/>
                    <NextArrow className="button" onClick={this.next}/>
                    <Slider ref={c => (this.slider = c)} {...settings}>
                        {
                            this.props.newProjectList.map((item) => (
                                <div key={item.get('id')}>
                                    <Item>
                                        <img src={item.get('imgUrl')} alt="" className=''/>
                                        <ImgBottom>
                                            <div className="img-bottom-left">
                                                <img src={addrIcon} alt=""/>{item.get("location")}
                                            </div>
                                            <MoreInfo className="button">
                                                <span>详情</span>
                                                <img src={moreInfoIcon} alt=""/>
                                            </MoreInfo>
                                        </ImgBottom>
                                        <div className='intro'>
                                            <span className='intro-left'>{item.get('price')}<span
                                                className='perMonth'>{item.get('month')}</span></span>
                                            <span className='intro-right'>{item.get('area') + item.get('rental')}</span>
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

export default connect(mapStateToProps, null)(NewProjectDemo);
