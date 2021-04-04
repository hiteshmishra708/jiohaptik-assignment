import React, { Component } from 'react';
import { Link, Input, Button, Label, Span, Div, Checkbox, H1, Modal, Select } from '../Common/Common';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { action_types } from '../../actions/constants';
import { isEmpty, setToken, getToken } from '../Validator/Validator';
import * as actions from '../../actions/action';

class Login extends Component {
    state = {
        email: "",
        password: "",
        showError: false,
        showModal: false,
        modalMsg: "",
        showPass: false,
    }

    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({ showError: true })
        if (this.isValid()) {
            this.props.callApi(action_types.LOGIN, {
                email: this.state.email,
                password: this.state.password
            });
            this.setState({ showError: false, modalMsg: "" });
        }
    }

    isValid() {
        return isEmpty(this.state.email) && isEmpty(this.state.password);
    }

    componentDidMount() {
        if (this.props.auth && this.props.auth.token) {
            this.props.history.push(this.state.roles[this.props.auth.data[0].role]);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.auth !== nextProps.auth && nextProps.auth) {
            if (nextProps.auth.access_token) {
                setToken(nextProps.auth.access_token)
                this.props.history.push("/");
            } else if(nextProps.auth.message) {
                this.setState({ showModal: true, modalMsg: nextProps.auth.message, isSuccess: false })
            }
        }
    }

    closeModal = () => {
        this.setState({ showModal: false, modalMsg: "", showError: false });
    }

    render() {
        return (
            <Div cName="login">
                {this.state.showModal && !this.props.loading && (<Modal width="400px" height="200px" closeModal={this.closeModal} title={this.state.modalMsg} isSuccess={this.state.isSuccess} />)}
                <Div cName="login-wrapper">
                    <Div cName="wrapper-heading d-common-label">Login</Div>
                    <form onSubmit={(e) => this.onSubmit(e)}>
                        <Div cName="row form-group">
                            <Input iType="email" label="Enter Email" id="email" value={this.state.email} required={true} onChange={this.onChange} showError={this.state.showError} autoFocus={true} />
                        </Div>
                        <Div cName="row form-group">
                            <Input type="password" label="Enter Password" id="password" value={this.state.password} required={true} onChange={this.onChange} showError={this.state.showError} />
                        </Div>
                        <Div cName="row submit-row">
                            <Button cName="form-control submit-button-md" title="Login" />
                        </Div>
                    </form>
                </Div>
            </Div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.store.auth,
        loading: state.store.loader,
    };
};
export default connect(mapStateToProps, actions)(withRouter(Login));
