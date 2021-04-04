import React, { Component } from 'react';
import { Link, Div } from '../Common/Common';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/action';
import { action_types } from '../../actions/constants';
import { MENU, removeToken, getToken } from '../Validator/Validator';

class Header extends Component {
    state = {
        menu: [],
    }

    componentDidMount() {
        if (getToken() && this.props.auth && this.props.auth.access_token) {
            this.setState({ menu: MENU });
        } else {
            this.props.updateReducer(action_types.CLEAR_DATA);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth && nextProps.auth.access_token) {
            this.setState({ menu: MENU });
        } else {
            if (this.state.menu.length) {
                this.setState({ menu: [] });
            }
        }
    }

    logout = () => {
        this.setState({ menu: [], active: '' });
        removeToken();
        this.props.updateReducer(action_types.LOGOUT);
    }

    onClick = (e) => {
        if (e.target.id === '/login') this.logout();
        else {
            this.setState({ active: e.target.id })
        }
    }

    render() {
        const isLogin = window.location.href.indexOf('login') != -1;
        return (
            <Div cName="login-header">
                {this.props.auth && this.props.auth.user && (
                    <Div cName="row welcome-msg">Welcome {this.props.auth.user.first_name}</Div>
                )}
                <Div cName="row">
                    <Div cName="links menu-links app-title">
                        {!(this.props.auth && this.props.auth.access_token) && (
                            isLogin? (
                                <Link cName="active" to="/register" title="Register" />
                            ): (
                                <Link cName="active" to="/login" title="Login" />
                            )
                        )}
                        {this.state.menu.map((val, idx) => {
                            return (
                                <Link key={idx} cName={this.state.active === val.url ? "active" : ""} id={val.url} to={val.url} title={val.option} onClick={this.onClick} />
                            )
                        })}
                    </Div>
                </Div>
            </Div>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.store.auth,
    };
};
export default connect(mapStateToProps, actions)(withRouter(Header));