import React, {Component} from 'react';
//组件的生命周期
class T10 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: 1.0
        };
    }
    componentDidMount() {
       setInterval(function(){            
            var opacity = this.state.opacity;
            opacity -= 0.05;
            if (opacity < 0.1) 
                opacity = 1.0;
            this.setState({opacity: opacity})}.bind(this),100);
       
    }
    render() {        
        return (
            <div style={{
                opacity: this.state.opacity
            }}>hello,{this.props.name}!</div>
        );
    }
}
export default T10;