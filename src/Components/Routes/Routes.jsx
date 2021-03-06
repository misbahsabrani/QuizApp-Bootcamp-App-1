import React, { Component } from 'react';
import { Link } from "react-router-dom" ;
import { connect } from "react-redux";
class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <br />
                <div className="center">
                <h4>Welcome {this.props.username}!</h4>
                </div>
                <br /><br />
                <div className="row">
                    <div className="col l6 s6  offset-l3">
                        <div className="card teal lighten-4">
                            <div className="card-content">
                                <div className="card-title">
                                    Courses
                                </div>
                                <ul className="collection">
                                    <Link to="/myReact"><li className="collection-item teal lighten-4 teal-text text-darken-4">React</li></Link>
                                    <Link to="/myRedux"><li className="collection-item teal lighten-4 teal-text text-darken-4">Redux</li></Link>
                                    <Link to="/myReactNative"><li className="collection-item teal lighten-4 teal-text text-darken-4">React Native</li></Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        username : state.signIn.userName,
    }
}
export default connect(mapStateToProps)(Routes);