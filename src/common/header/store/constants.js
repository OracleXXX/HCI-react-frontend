import triangle from '../../../statics/imgs/headerImgs/triangle.svg';
import Banner1 from '../../../statics/imgs/headerImgs/1.jpg'
import Banner2 from '../../../statics/imgs/headerImgs/4.jpg'
import Banner3 from '../../../statics/imgs/headerImgs/9.jpg'
import Banner4 from '../../../statics/imgs/headerImgs/2.jpg'
import * as router from '../../../router/router'


export const TRIANGLE = triangle;
export const CHANGE_DROPDOWN = 'headerImgs/CHANGE_DROPDOWN';
export const CHANGE_SHOW_BANNER = 'header/CHANGE_SHOW_BANNER';
export const NAV_BAR = [
    {
        id: 1,
        link: '/',
        name: "HCI"
    }, {
        id: 2,
        link: router.new_project.path,
        name: router.new_project.name,
    }, {
        id: 3,
        link: '',
        name: router.one_step.name,
    }, {
        id: 4,
        link: router.platform_loan.path,
        name: router.platform_loan.name,
    }, {
        id: 5,
        link: router.closed_project.path,
        name: router.closed_project.name,
    }, {
        id: 6,
        link: router.our_team.path,
        name: router.our_team.name,
    }, {
        id: 7,
        link: router.news_feed.path,
        name: router.news_feed.name
    }, {
        id: 8,
        link: router.contact_us.path,
        name: router.contact_us.name
    },
];
export const DROP_DOWN_BAR = [
    {
        id: 1,
        link: router.one_step.path + router.management.path,
        name: router.management.name,
    }, {
        id: 2,
        link: router.one_step.path + router.long_short.path,
        name: router.long_short.name
    }, {
        id: 3,
        link: router.one_step.path + router.activities.path,
        name: router.activities.name
    },
]

export const BANNER_CONTENT = [
    {
        id: 1,
        imgUrl: Banner1,
        content: "我们将持续为客户提供更高效，多元的房地产项目配置组合，保障资产安全"
    }, {
        id: 2,
        imgUrl: Banner2,
        content: "我们将坚持深耕于成本更低，成长潜力更高的地区，为客户提供高效的投资方案"
    }, {
        id: 3,
        imgUrl: Banner3,
        content: "我们坚持传统行业互联网化的理念，建立专属资产配置的社群，让资源得到充分分享"
    },{
        id: 4,
        imgUrl: Banner4,
        content: "我们将借助平台优势 提供平台自身房地产贷款服务 为客户撬动更大资本价值 "
    }
]

export const SLIDER_SETTINGS = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    lazyLoad: true,

};