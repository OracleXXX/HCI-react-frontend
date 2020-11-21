import addrIcon from '../.././../statics/imgs/contactUs/addrIcon.png';
import emailIcon from '../.././../statics/imgs/contactUs/emailIcon.png';
import QRcode from "../../../statics/imgs/contactUs/QRcode.jpg";

export const TEST = 'test';


export const NAME_HELP_TEXT = '您可以使用任何名字，包括昵称或者英文名'
export const EMAIL_HELP_TEXT = '您的常用邮箱，用于回复您的消息，如需要快速回复，请填写微信号或者电话号码。'
export const PHONE_HELP_TEXT = '我们不会将您的电话号码泄露给任何人。填写电话号码，获得最快速最直接的回复。'
export const WECHAT_HELP_TEXT = '填写微信号码，客服将会第一时间通过微信与您沟通。'
export const COMMENT_HELP_TEXT = '感谢您的留言，我们会最快时间内为您解答一切问题。如果您有任何意见或者建议，欢迎您随时联系我们。'

export const contactColumns = [
    {
        Header: '北京（总部）',
        accessor: 'beijing',
    },
    {
        Header: '上海（分部）',
        accessor: 'shanghai',
    }
];

export const contactData = [
    {
        beijing: "北京海淀",
        shanghai: '浦东新区'
    },
    {
        beijing: '北京email',
        shanghai: '上海email'
    },
];
export const LOCATION = ["纳什维尔（总部）", "1609 Damascus Rd, 37128", "xueguanxiong@gmail.com"];
export const ADDR_ICON = addrIcon;
export const EMAIL_ICON = emailIcon;
export const QR_CODE = QRcode;