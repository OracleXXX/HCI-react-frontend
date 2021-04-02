import React from 'react';
import {Link} from 'react-router-dom';

class Error extends React.Component {
    render() {
        return (
            <div id='page-wrapper'>
                <h1>出错啦！</h1>
                <div className="row" style={{marginTop: '30px'}}>
                    <div className="col-md-12">
                        <h1>页面被狗狗叼走啦～～～</h1>
                        <Link to='/'><h1>点我返回首页</h1></Link>
                    </div>
                </div>

            </div>
        )
    }
}

export default Error;