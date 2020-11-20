import triangle from '../../../statics/imgs/headerImgs/triangle.svg';
import Banner1 from '../../../statics/imgs/headerImgs/banner-regular.png'
import {DemoWrapper} from "../BannerStyle";
import React from "react";

export const TRIANGLE = triangle;
export const CHANGE_DROPDOWN = 'headerImgs/CHANGE_DROPDOWN';

export const NAV_BAR = [
    {
        id: 1,
        link: '/',
        name: "HCI"
    }, {
        id: 2,
        link: '/new-project',
        name: "精选房源"
    }, {
        id: 3,
        link: '',
        name: "一站式服务"
    }, {
        id: 4,
        link: '/platform-loan',
        name: "平台贷款"
    }, {
        id: 5,
        link: '/closed-project',
        name: "项目展示"
    }, {
        id: 6,
        link: '/our-team',
        name: "团队背景"
    }, {
        id: 7,
        link: '/news-feed',
        name: "美房投资攻略"
    }, {
        id: 8,
        link: '/contact-us',
        name: "联系我们"
    },
];
export const DROP_DOWN_BAR = [
    {
        id: 1,
        link: "/one-step/management",
        name: "一站式房屋管理"
    }, {
        id: 2,
        link: "/one-step/long-short",
        name: "一站式房屋买卖"
    }, {
        id: 3,
        link: "/one-step/activities",
        name: "平台活动"
    },
]

export const BANNER_CONTENT = [
    {
        id: 1,
        imgUrl: Banner1,
        content: "我们将持续为客户提供更高效，多元的房地产项目配置组合，保障资产安全"
    }, {
        id: 2,
        imgUrl: Banner1,
        content: "我们将坚持深耕于成本更低，成长潜力更高的地区，为客户提供高效的投资方案"
    }, {
        id: 3,
        imgUrl: Banner1,
        content: "我们坚持传统行业互联网化的理念，建立专属资产配置的社群，让资源得到充分分享"
    }, {
        id: 4,
        imgUrl: Banner1,
        content: "我们将借助平台优势 提供平台自身房地产贷款服务 为客户撬动更大资本价值"
    },
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