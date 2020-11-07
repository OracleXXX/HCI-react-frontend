import React, {PureComponent} from 'react';
import {
    NewProjectDemoWrapper,
    SliderTitle,
    SliderWrapper,
    Item,
    PrevArrow,
    NextArrow,
    InnerImg
} from '../componentStyles/NewProjectDemoStyle';
import {connect} from 'react-redux';
import Slider from 'react-slick';
import addrIcon from '../../../statics/imgs/homePageImgs/addrIcon.png';
import moreInfoIcon from '../../../statics/imgs/homePageImgs/moreInfoIcon.png';

class NewProjectDemo extends PureComponent {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }

    render() {

        const settings = {
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            pauseOnHover: true,
            arrows: false,

        };

        return (
            <NewProjectDemoWrapper>
                <SliderTitle>
                    <div className='title'>精选房源</div>
                    <div className='rec'/>
                    <div className='subTitle'>进行深入研究并浏览附近的原始照片，无人机画面，居民评论和当地见解，以了解待售房屋是否适合您。</div>
                </SliderTitle>
                <SliderWrapper>
                    <PrevArrow className="button hovered" onClick={this.previous}/>
                    <NextArrow className="button" onClick={this.next}/>
                    <Slider ref={c => (this.slider = c)} {...settings}>
                        {/*
                        <div>
                            <Item>
                                <img src="upload/252 BrookHollow.jpg" alt="" className=''/>
                                <div className='intro'>
                                    <span className='intro-left'>$2000/月</span>
                                    <span className='intro-right'>1200平方木/房屋出售</span>
                                </div>
                            </Item>
                        </div>
                        */}
                        {
                            this.props.list.map((item) => (
                                <div key={item.get('id')}>
                                    <Item>
                                        <img src={item.get('imgUrl')} alt="" className=''/>
                                        <InnerImg>
                                            <div className='addr'>
                                                <img src={addrIcon} alt="" className='addrIcon'/>
                                                {item.get('addr')}
                                            </div>
                                            <div className='projectMoreInfo'>
                                                <span>详情</span>
                                                <img src={moreInfoIcon} alt=""/>
                                            </div>
                                        </InnerImg>
                                        <div className='intro'>
                                            <span className='intro-left'>${item.get('price')}<span
                                                className='perMonth'>/月</span></span>
                                            <span className='intro-right'>{item.get('area')}</span>
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
    list: state.getIn(['homePage', 'newProjectList'])


})

export default connect(mapStateToProps, null)(NewProjectDemo);
