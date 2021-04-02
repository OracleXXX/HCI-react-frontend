import step1 from '../../../statics/imgs/homePageImgs/InvestmtFLowChartImgs/flowChart1.png';
import step2 from '../../../statics/imgs/homePageImgs/InvestmtFLowChartImgs/flowChart2.png';
import step3 from '../../../statics/imgs/homePageImgs/InvestmtFLowChartImgs/flowChart3.png';
import step4 from '../../../statics/imgs/homePageImgs/InvestmtFLowChartImgs/flowChart4.png';
import step5 from '../../../statics/imgs/homePageImgs/InvestmtFLowChartImgs/flowChart5.png';
import step6 from '../../../statics/imgs/homePageImgs/InvestmtFLowChartImgs/flowChart6.png';
import step7 from '../../../statics/imgs/homePageImgs/InvestmtFLowChartImgs/flowChart7.png';
import index1 from '../../../statics/imgs/homePageImgs/InvestmtFLowChartImgs/index1.png';
import index2 from '../../../statics/imgs/homePageImgs/InvestmtFLowChartImgs/index2.png';
import index3 from '../../../statics/imgs/homePageImgs/InvestmtFLowChartImgs/index3.png';
import index4 from '../../../statics/imgs/homePageImgs/InvestmtFLowChartImgs/index4.png';
import index5 from '../../../statics/imgs/homePageImgs/InvestmtFLowChartImgs/index5.png';
import index6 from '../../../statics/imgs/homePageImgs/InvestmtFLowChartImgs/index6.png';
import index7 from '../../../statics/imgs/homePageImgs/InvestmtFLowChartImgs/index7.png';
import oddDash from '../../../statics/imgs/homePageImgs/InvestmtFLowChartImgs/oddDash.svg';
import evenDash from '../../../statics/imgs/homePageImgs/InvestmtFLowChartImgs/evenDash.svg';
import moreInfoIcon from "../../../statics/imgs/homePageImgs/moreInfoIcon.png";
import addrIcon from '../../../statics/imgs/homePageImgs/addrIcon.png';
import WeOfferPic from '../../../statics/imgs/homePageImgs/offerBG.png';
import principalImg from '../../../statics/imgs/homePageImgs/principal.png'
import RealEstateRecmdPic from '../../../statics/imgs/homePageImgs/RealEstateRecmd.svg';
import LoanPic from '../../../statics/imgs/homePageImgs/loan.svg';
import INVTPic from '../../../statics/imgs/homePageImgs/NAInvestment.svg';

export const CHANGE_HOMEPAGE_DATA = 'homePageImgs/CHANGE_HOMEPAGE_DATA';
/*flowchart constants*/
export const ODD_DASH = oddDash;
export const EVEN_DASH = evenDash;
export const MORE_INFO_ICON = moreInfoIcon;
export const MAP_STEP_LIST_TO_STRING = [
    [step1, index1, '选定房源', '', '', ''],
    [step2, index2, '咨询详情及回报', '(交税流程、税务问题、法律问题)', '', ''],
    [step3, index3, '与HCI签订合同并交付定金', '', '', ''],
    [step4, index4, '资金', '', 'a.现金（交易具体流程）', 'b.私人贷款（私人贷款法律规范及流程）'],
    [step5, index5, '房屋情况', '', 'a.房屋状况检查表', 'b.装修预算表'],
    [step6, index6, '管理合同', '', 'a.第一年全包合同（10个月一次性租金回报） ', 'b.正常管理合同（10%管理费）'],
    [step7, index7, '项目展示', '', '', '']
];
/*new project constants*/
export const ADDR_ICON = addrIcon;

export const NEW_PROJECT_SETTINGS = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    lazyLoad: true,

};
/*news feed constants*/
/*we offer constants*/
export const WE_OFFER_IMG = WeOfferPic;
export const PRINCIPAL_IMG = principalImg;
export const LOAN_IMG = LoanPic;
export const INVT_IMG = INVTPic;
export const REAL_ESTATE_RECMD_IMG = RealEstateRecmdPic;
export const WE_OFFER = "Homecap Inc是美国房地产投资股份有限公司，多年致力于北美房地产投资。投资内容包括开发翻新、租赁和私人贷款等。" +
    "向客户提供非中介的折扣型投资房源。为客户带来稳定回报率的同时，也辅助客户进行合理的资产配置。线上线下同时展示北美房产投资咨询、一站式购房及管理服务"

export const OUR_PRINCIPALS = {
    TITLE: "我们的四个坚持原则",
    OP1: "1. 坚持为客户提供更高效，多元地产投资组合",
    OP2: "2. 坚持深耕于成本更低，价值潜力更高地区",
    OP3: "3. 坚持传统行业互联网化思维，建立专属社群",
    OP4: "4. 坚持借助自身贷款优势，发掘更大资本价值",
}