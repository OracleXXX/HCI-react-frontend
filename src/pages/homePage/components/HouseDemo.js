import React, {PureComponent} from 'react';
import {
    HouseDemoWrapper,
    SliderTitle,
    SliderWrapper,
    Item,
    PrevArrow,
    NextArrow
} from '../componentStyles/HouseDemoStyle';
import {connect} from 'react-redux';
import Slider from 'react-slick';


class HouseDemo extends PureComponent {
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
            <HouseDemoWrapper>
                <SliderTitle>
                    <div className='title'>精选房源</div>
                    <div className='rec'/>
                    <div className='subTitle'>进行深入研究并浏览附近的原始照片，无人机画面，居民评论和当地见解，以了解待售房屋是否适合您。</div>
                </SliderTitle>
                <SliderWrapper>
                    <PrevArrow className="button hovered" onClick={this.previous}/>
                    <NextArrow className="button" onClick={this.next}/>
                    <Slider ref={c => (this.slider = c)} {...settings}>
                        <div>
                            <Item>
                                <img src="https://photos.zillowstatic.com/fp/5c52ca46dd07bc2ad93491752c185451-p_e.jpg" alt="" className=''/>
                                <div className='intro'>
                                    <span className='intro-left'>$2000/月</span>
                                    <span className='intro-right'>1200平方木/房屋出售</span>
                                </div>
                            </Item>
                        </div>
                        <div><Item>2</Item></div>
                        <div><Item>3</Item></div>
                        <div><Item>4</Item></div>
                        <div><Item>5</Item></div>
                        <div><Item>6</Item></div>
                    </Slider>

                </SliderWrapper>

            </HouseDemoWrapper>

        )
    }

}

export default connect(null, null)(HouseDemo);
