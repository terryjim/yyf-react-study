import React, { Component } from 'react';
const names = ['Alice', 'Emily', 'Kate'];


class T3 extends Component {
    render() {
        return (
            <div>
                {names.map(function (name) {
                    return (<div>hello,{name}!</div>)
                })}
            </div>
        );
    }
}

export default T1;
