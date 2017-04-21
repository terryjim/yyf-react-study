import React, {Component} from 'react';
import $ from 'jquery';
//ajax-jquery 安装jquery包 npm install --save-dev jquery
class T11 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            lastGistUrl: ''
        };
    };
    componentDidMount() {
        $
            .get(this.props.source, function (result) {
                var lastGist = result[0];

                this.setState({userName: lastGist.owner.login, lastGistUrl: lastGist.html_url});

            }.bind(this));
    };
    render() {
        return (
            <div>{this.state.userName}'s last gist is
                <a href={this.state.lastGistUrl}>here</a>.</div>
        );
    }
}
export default T11;