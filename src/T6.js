import React, {Component} from 'react';
import PropTypes from 'prop-types';

class T6 extends Component {
    //注意定义为static变量，与类外部定义defaultProps\propTypes方法效果一样
    static defaultProps = {
        title: 'eeee'
    }
    static propTypes = {
        title: PropTypes.string.isRequired
    }
    render() {
        return <h1>{this.props.title}</h1>;
    }
}

/*
与类内部定义静态变量defaultProps\propTypes效果一样
T6.propTypes = {
    title: PropTypes.string.isRequired
};

T6.defaultProps = {
    title: 'ddddd'
} 
*/
export default T6;