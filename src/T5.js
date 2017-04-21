import React, { Component } from 'react';
class T5 extends Component {
    //以数组为参数
    render() {
        return (
            <ol>
                {React.Children.map(this.props.children, function (child) {
                    return <li>{child}</li>;
                })}
            </ol>
        );
    }
}
export default T5;