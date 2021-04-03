import React, { Component } from 'react';
import { Div, Modal } from '../Common/Common';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { action_types } from '../../actions/constants';
import { isEmpty, setToken } from '../Validator/Validator';
import * as actions from '../../actions/action';

class Login extends Component {
    state = {
        showModal: false,
        modalMsg: "",
        showPass: false,
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
        if (!(this.props.auth && this.props.auth.access_token)) {
            this.props.history.push("/login");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.auth !== nextProps.auth && nextProps.auth) {
            if (nextProps.auth.status === 200 && nextProps.auth.data) {
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
            <Div cName="home">
                {this.state.showModal && !this.props.loading && (<Modal width="400px" height="200px" closeModal={this.closeModal} title={this.state.modalMsg} isSuccess={!this.state.showError} />)}
                <Div cName="home-wrapper">
                    Home
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
