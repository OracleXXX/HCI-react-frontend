import addrIcon from "../../../statics/imgs/homePageImgs/addrIcon.png";
import moreInfoIcon from "../../../statics/imgs/homePageImgs/moreInfoIcon.png";
import seeMoreIcon from "../../../statics/imgs/newProject/seeMoreIcon.png"
import prevArrow from "../../../statics/imgs/newProject/detail/prevArrow.png";
import nextArrow from "../../../statics/imgs/newProject/detail/nextArrow.png";
import calculator from "../../../statics/imgs/newProject/detail/calculator.png";
import location from "../../../statics/imgs/newProject/detail/location.png";

export const CHANGE_NEW_PROJECT_DETAIL = 'newProject/CHANGE_NEW_PROJECT_DETAIL';
export const CHANGE_NEW_PROJECT_OVERVIEW = 'newProject/CHANGE_NEW_PROJECT_OVERVIEW';
export const PROJECT_DETAIL_STATIC = {
    TITLE_PATH: {
        CURR: "当前位置: ",
        PREV_PATH: "精选房源 > ",
        CONNECT_IMG: null,
        CURR_PATH: "内容详情",
    },
    HOUSE_INFO: {
        HOUSE_INFO_TITLE: "房屋描述：",
    },
    BASIC_INFO: {
        BASIC_INFO_TITLE: "房屋基本信息：",
        DATA: [
            {
                NAME: "卧室数量：",
                PARAM: "num_of_bedroom",
                INDEX: 1
            },
            {
                NAME: "建筑面积：",
                PARAM: "area",
                INDEX: 0
            },
            {
                NAME: "建筑年代：",
                PARAM: "built_year",
                INDEX: 1
            },
            {
                NAME: "电梯：",
                PARAM: "elevator",
                INDEX: 1
            },
            {
                NAME: "免费WIFI：",
                PARAM: "has_wifi",
                INDEX: 1
            },
            {
                NAME: "浴室数量：",
                PARAM: "num_of_bath_room",
                INDEX: 1
            },
            {
                NAME: "房屋类型：",
                PARAM: "type_of_house",
                INDEX: 1
            },
            {
                NAME: "加热：",
                PARAM: "heating",
                INDEX: 1
            },
            {
                NAME: "外观：",
                PARAM: "appearance",
                INDEX: 1
            },
            {
                NAME: "壁炉：",
                PARAM: "fire_place",
                INDEX: 1
            },
            {
                NAME: "预期装修费用：",
                PARAM: "flipping_cost",
                INDEX: 0
            },
            {
                NAME: "预期租金收益/月：",
                PARAM: "leasing_fee",
                INDEX: 0
            },
            {
                NAME: "预期现金流(全款)：",
                PARAM: "cash_flow_cash",
                INDEX: 0
            },
            {
                NAME: "预期现金流(贷款)：",
                PARAM: "cash_flow_loan",
                INDEX: 0
            },
            {
                NAME: "平台贷款：",
                PARAM: "platform_loan",
                INDEX: 0
            },

        ],
        /*    NUM_OF_BEDROOM: "卧室数量：",
            AREA: "建筑面积：",
            BUILT_YEAR: "建筑年代：",
            ELEVATOR: "电梯：",
            HAS_WIFI: "免费WIFI：",
            NUM_OF_BATH_ROOM: "浴室数量：",
            TYPE_OF_HOUSE: "房屋类型：",
            HEATING: "加热：",
            APPEARANCE: "外观：",
            FIRE_PLACE: "壁炉：",
            FLIPPING_COST: "预期装修费用：",
            RENTAL_RATE_OF_RETURN: "预期租金：",
            CASH_FLOW_CASH: "预期现金流(全款)：",
            CASH_FLOW_LOAN: "预期现金流(贷款)：",
            PLATFORM_LOAN: "平台贷款：",*/
    },
    CONTACT_US: {
        CONTACT_US_TITLE: "联系我们"
    }
}
export const PROJECT_DETAIL_IMAGES = {
    PREV_ARROW: prevArrow,
    NEXT_ARROW: nextArrow,
    CALCULATOR: calculator,
    LOCATION: location
}
export const FULL_ADDR = "具体地址";
export const LEASING_FEE = "租金";
export const CASH_FLOW_LOAN = "预期现金流（贷款）";
export const CASH_FLOW_CASH = "预期现金流（全款）";
export const EXPECTED_RENTAL_RATE_OF_RETURN = "预期租金回报率";
export const EXPECTED_CASH_RATE_OF_RETURN = "预期现金回报率";
export const EXPECTED_NET_INCOME = "预期总回报率";
export const FLIPPING_BUDGET = "预期装修费用";
export const PLATFORM_LOAN = "平台贷款";

export let GET_MORE_PAGES = 'newProject/GET_MORE_PAGES';
export const CHANGE_NEW_PROJECT_LIST = 'newProject/CHANGE_NEW_PROJECT_LIST';

export const ADDR_ICON = addrIcon;
export const MORE_INFO_ICON = moreInfoIcon;
export const SEE_MORE_ICON = seeMoreIcon;
export const PROXY_URL = "//52.34.204.235:8080/";
export const PROXY_URL_IMAGES = "//52.34.204.235:8080/images";