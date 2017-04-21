import React, { Component } from 'react';
class T8 extends Component {
//使用ES6 class语法创建组件，初始化state的工作要在constructor中完成。不需要再调用getInitialState方法。
    /*getInitialState() {
        return { liked: false };
    }*/
    constructor(props){
        super(props);
        this.state={liked:false};
    }
    handleClick() {        
        this.setState({ liked: !this.state.liked });             
    }
    render() {
        var text = this.state.liked ? 'like' : 'haven\'t liked';      
        return (
            <p onClick={this.handleClick.bind(this)}>
                You {text} this. Click to toggle.
      </p>
        );
    }
}
export default T8;