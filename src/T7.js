import React, {Component} from 'react';
class T7 extends Component {
    handleClick() {
        this
            .refs
            .myTextInput
            .focus();
        // this.handleClick = this.handleClick.bind(this); 如果这样用在下面可以直接写成
        // onClick={this.handleClick}
    }
    render() {
        //使用ES6 class语法创建组件， class中的方法不会自动将this绑定到实例中。必须使用 .bind(this)或者 箭头函数 ＝>来进行手动绑定。
        return (
            <div><input type="text" ref="myTextInput"/>
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this
                    .handleClick
                    .bind(this)}/>
            </div>
        )
    }
}

export default T7;
