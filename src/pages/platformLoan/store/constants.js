import step1 from '../../../statics/imgs/PlatformLoan/step1.png';
import step2 from '../../../statics/imgs/PlatformLoan/step2.png';
import step3 from '../../../statics/imgs/PlatformLoan/step3.png';
import step4 from '../../../statics/imgs/PlatformLoan/step4.png';
import step5 from '../../../statics/imgs/PlatformLoan/step5.png';
import step1_focus from '../../../statics/imgs/PlatformLoan/step1-focus.png';
import step2_focus from '../../../statics/imgs/PlatformLoan/step2-focus.png';
import step3_focus from '../../../statics/imgs/PlatformLoan/step3-focus.png';
import step4_focus from '../../../statics/imgs/PlatformLoan/step4-focus.png';
import step5_focus from '../../../statics/imgs/PlatformLoan/step5-focus.png';
import loan_bg from '../../../statics/imgs/PlatformLoan/loan-bg.png';
import arrow from '../../../statics/imgs/PlatformLoan/arrow.png';

export const STEP1 = step1;
export const STEP2 = step2;
export const STEP3 = step3;
export const STEP4 = step4;
export const STEP5 = step5;

export const STEP1_FOCUS = step1_focus;
export const STEP2_FOCUS= step2_focus;
export const STEP3_FOCUS = step3_focus;
export const STEP4_FOCUS = step4_focus;
export const STEP5_FOCUS = step5_focus;
export const BACKGROUND = loan_bg;
export const ARROW = arrow;

export const data = {
    title: '平台贷款',
    background: loan_bg,
    shortDescription1: '平台作为房屋的所有者以房屋作为抵押向买方提供贷款',
    shortDescription2: '买方向卖方支付不低于15%的首付，买卖双方商定其利率及分期付款的方式。（例：平台提供30年固定利率贷款，3年后将余额一次性付清）',
    steps: [
        {
            title: "买方",
            img: step1,
            img_focus: step1_focus,
            info: ""
        },
        {
            title: "贷款合同",
            img: step2,
            img_focus: step2_focus,
            info: ""
        },
        {
            title: "买方拥有房屋支配及使用权",
            img: step3,
            img_focus: step3_focus,
            info: ""
        },
        {
            title: "房契转换合同",
            img: step4,
            img_focus: step4_focus,
            info: ""
        },
        {
            title: "私人贷款交易完成",
            img: step5,
            img_focus: step5_focus,
            info: ""
        }
    ]
}

export const CHANGE_STEP = 'platformLoan/CHANGE_STEP'
export const GET_STEPS = 'platformLoan/GET_STEPS'