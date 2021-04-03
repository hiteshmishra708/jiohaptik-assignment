import React, { Component } from 'react';
import { Link, Input, Button, Label, Span, Div, Checkbox, H1, Modal, Select } from '../Common/Common';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { action_types } from '../../actions/constants';
import { isEmpty, setToken, getToken } from '../Validator/Validator';
import * as actions from '../../actions/action';

class Login extends Component {
    state = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        showError: false,
        showModal: false,
        modalMsg: "",
        showinnerModal: false,
        options: [
            { option: "Select Role", value: "" }
        ],
        comp_id: "",
        showPass: false,
        roles: {
            'OrgAdmin': '/shop_list',
            'ShopAdmin': '/counter_list',
            'Cashier': '/queue',
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    onCheckChange = (e) => {
        this.setState({ [e.target.id]: e.target.checked })
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({ showError: true })
        if (this.isValid()) {
            this.props.callApi(action_types.REGISTER, {
                email: this.state.email,
                password: this.state.password,
                first_name: this.state.first_name,
                last_name: this.state.last_name
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
            if (nextProps.auth.status === 99) {
                if (nextProps.auth.data.length > 1) {
                    this.setState({ showinnerModal: true })
                }
            } else if (nextProps.auth.status === 200 && nextProps.auth.data) {
                setToken(nextProps.auth.data.token, this.state.isLocal)
                this.props.history.push(this.state.roles[nextProps.auth.data.role_name]);
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
                {this.state.showModal && !this.props.loading && (<Modal width="400px" height="200px" closeModal={this.closeModal} title={this.state.modalMsg} isSuccess={!this.state.showError} />)}
                <Div cName="login-wrapper">
                    <Div cName="login-wrapper-heading d-common-label">Register</Div>
                    <form onSubmit={(e) => this.onSubmit(e)}>
                        <Div cName="row form-group">
                            <Input type="text" label="First Name" id="first_name" value={this.state.first_name} required={true} onChange={this.onChange} showError={this.state.showError} autoFocus={true} />
                        </Div>
                        <Div cName="row form-group">
                            <Input type="text" label="Last Name" id="last_name" value={this.state.last_name} required={true} onChange={this.onChange} showError={this.state.showError} autoFocus={true} />
                        </Div>
                        <Div cName="row form-group">
                            <Input iType="email" label="Enter Email" id="email" value={this.state.email} required={true} onChange={this.onChange} showError={this.state.showError} autoFocus={true} />
                        </Div>
                        <Div cName="row form-group">
                            <Input type="password" label="Enter Password" id="password" value={this.state.password} required={true} onChange={this.onChange} showError={this.state.showError} />
                        </Div>
                        <Div cName="row submit-row">
                            <Button cName="form-control submit-button-md" title="Register" />
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
