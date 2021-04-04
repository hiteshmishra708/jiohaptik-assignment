import React, { Component } from 'react';
import { Div, Modal, Table, Textarea, Button } from '../Common/Common';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { action_types } from '../../actions/constants';
import { isEmpty } from '../Validator/Validator';
import * as actions from '../../actions/action';
import Tweets from './Tweets';

class Login extends Component {
    state = {
        showModal: false,
        modalMsg: "",
        showPass: false
    }

    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({ showError: true })
        if (this.isValid()) {
            this.props.callApi(action_types.TWEET, {
                tweet: this.state.tweet,
            });
            this.setState({ showError: false, modalMsg: "", tweet: "" });
        }
    }

    isValid() {
        return isEmpty(this.state.tweet);
    }

    componentDidMount() {
        if (!(this.props.auth && this.props.auth.access_token)) {
            this.props.history.push("/login");
        }
        this.props.callApi(action_types.ALL_TWEETS, undefined, 'GET');
    }

    closeModal = () => {
        this.setState({ showModal: false, modalMsg: "", showError: false });
    }

    render() {
        return (
            <Div cName="home">

                {this.state.showModal && !this.props.loading && (<Modal width="400px" height="200px" closeModal={this.closeModal} title={this.state.modalMsg} isSuccess={!this.state.showError} />)}

                {this.props.auth && this.props.auth.user && (
                    <Div cName="home-wrapper">
                        <form onSubmit={(e) => this.onSubmit(e)}>
                            <Div cName="row form-group">
                                <Textarea id="tweet" label="Tweet" value={this.state.tweet} required={true} onChange={this.onChange} showError={this.state.showError} placeholder="What do you want to talk about?" />
                            </Div>
                            <Div cName="row submit-row">
                                <Button cName="form-control submit-button-md" title="Post" />
                            </Div>
                        </form>
                        <Div cName="wrapper-heading d-common-label">Latest Feed</Div>
                        <Tweets tweets={this.props.tweets} />
                    </Div>
                )}
            </Div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.store)
    return {
        auth: state.store.auth,
        tweets: state.store.tweets,
        loading: state.store.loader,
    };
};
export default connect(mapStateToProps, actions)(withRouter(Login));
