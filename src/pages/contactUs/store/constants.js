import addrIcon from '../.././../statics/imgs/contactUs/addrIcon.png';
import emailIcon from '../.././../statics/imgs/contactUs/emailIcon.png';
import QRcode from "../../../statics/imgs/contactUs/QRcode.jpg";
import contactUsBackground from "../../../statics/imgs/newProject/detail/contactUsBG.png";

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
export const CONTACT_US = {
    TITLE: "联系我们",
    BUTTON: "联系经纪人",
    SUBMIT_BUTTON: "提交",
    IMAGES: {
        BG: contactUsBackground
    },
    DATA: [
        {
            CONTROL_ID: "exampleForm.ControlInput1",
            LABEL: "性名",
            TYPE: "name",
            ARIA_DESCRIBEDBY: "nameInfo",
            PLACEHOLDER: "请输入您的姓名",
            HELP_TEXT: '您可以使用任何名字，包括昵称或者英文名'
        },
        {
            CONTROL_ID: "formBasicEmail",
            LABEL: "邮箱",
            TYPE: "email",
            ARIA_DESCRIBEDBY: "emailInfo",
            PLACEHOLDER: "请输入您的邮箱",
            HELP_TEXT: '您的常用邮箱，用于回复您的消息，如需要快速回复，请填写微信号或者电话号码。'
        },
        {
            CONTROL_ID: "formBasicPhoneNumber",
            LABEL: "电话号码",
            TYPE: "name",
            ARIA_DESCRIBEDBY: "phone",
            PLACEHOLDER: "请输入您的电话号码",
            HELP_TEXT: '我们不会将您的电话号码泄露给任何人。填写电话号码，获得最快速最直接的回复。'

        },
        {
            CONTROL_ID: "formBasicWechat",
            LABEL: "微信号",
            TYPE: "text",
            ARIA_DESCRIBEDBY: "wechatInfo",
            PLACEHOLDER: "请输入您的微信号",
            HELP_TEXT: '填写微信号码，客服将会第一时间通过微信与您沟通。'
        },
    ],
    COMMENTS:
        {
            CONTROL_ID: "formBasicComments",
            LABEL: "您的留言",
            AS: "textarea",
            ROWS: 4,
            ARIA_DESCRIBEDBY: "commentsInfo",
            PLACEHOLDER: "请输入您的留言",
            COMMENT_HELP_TEXT: '感谢您的留言，我们会最快时间内为您解答一切问题。如果您有任何意见或者建议，欢迎您随时联系我们。'
        }

}