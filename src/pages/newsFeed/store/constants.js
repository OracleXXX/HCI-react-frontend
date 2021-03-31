import QRCode from '../../../statics/imgs/contactUs/QRcode.jpg';
import date from '../../../statics/imgs/newFeed/date.png';
import fire from '../../../statics/imgs/newFeed/fire.png';
import imgTag from '../../../statics/imgs/newFeed/imgTag.svg';
import views from '../../../statics/imgs/newFeed/views.svg';
import wechat from '../../../statics/imgs/newFeed/wechat.png';


export let CHANGE_PAGE = 'newsFeed/CHANGE_PAGE';
export const CHANGE_NEWS_FEED_LIST = 'newsFeed/CHANGE_NEWS_FEED_LIST'
export const CHANGE_DETAIL_LIST = 'newsFeed/CHANGE_DETAIL_LIST'


export const STATIC = {
    TITLE_PATH: {
        CURR: "当前位置: ",
        PREV_PATH: "新闻资讯 > ",
        CONNECT_IMG: null,
        CURR_PATH: "内容详情",
    },
    QR: {
        IMG: QRCode,
        TITLE: '扫码关注',
        DETAIL: '扫描关注二维码获取最新动态',
        "asd": "sss"
    },
    TAGS: {
        "0": '时事热点',
        "1": '市场趋势',
    },
    REFER: {
        TITLE: "热门文章",
    }
}

export const IMAGES = {
    DATE: date,
    FIRE: fire,
    WE_CHAT: wechat,
    IMG_TAG: imgTag,
    VIEWS: views,

}